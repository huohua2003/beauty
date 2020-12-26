const express = require('express')
// 引入第三包：
const md5 = require('md5');//加密包
const bodyParser = require('body-parser');//获取传参参数数据中间件
const jsonwebtoken =require('jsonwebtoken');//设定令牌的包
const moment = require('moment');//以特定的格式获取当前时间
const mongoose = require('mongoose');//操作数据库的工具
// 导入内置模块：
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3333;

// 读取.env文件中的jwt加密字符串
const jwt_secret = fs.readFileSync("./.env", "utf8");

// ============================数据库操作固定三步走===========================
// 1.连接数据库：
mongoose.connect('mongodb://127.0.0.1:27017/maizuo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// 2.定义schema
const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        // get的方式定义返回内容：
        get: (val) => val.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),

    },
    password: {
        type: String,
        required: true,
    },
    headIcon: String,
    gender: Number,
})
// 3.定义model
const Model = mongoose.model('User',UserSchema,'users')


// ============================中间件部分=====================================
// 1.使用post方式参数数据的中间件：
app.use(bodyParser.urlencoded({extended:false}));

// 2.用于密码加密的中间件： 第三方中间件：
const getPasswordCrypted =  (req,res,next) =>{
    // 获取得到post传参参数
    passwd = req.body.password;
    // 将获取到的密码做加密处理并且挂载在req.body上备用：
    req.body.passwordCrypted = md5(passwd + md5(passwd).substr(0,16));
    next();
}

// 3.用于验证token令牌的中间件：
const cheackToken = (req,res,next)=>{
    // 获取jwt：获取到的我们真正要的就是最后一段
    // console.log(req.headers.authorization);
    let arr = (req.headers.authorization).split(' ');
    let token = arr[arr.length - 1];
    // console.log(token); 
    // 验证是否有jwt ：没有身份验证失败
    if(!token){
        // 没有jwt
        res.send({
            code:'2000',
            msg:'身份验证失败'
        });
    }else{
        // 有jwt，就做验证：验证不一定成功 尝试去验证
        try{
            // 还原jwt的内容 
            let result = jsonwebtoken.verify(token,jwt_secret);
            // console.log(result);//{ user_id: 31167509, mobile: '18512345678', iat: 1607004236 }
            // 如果需要做jwt时间有效性验证，可以在此拿当前时间戳与result.iat进行比较
            // 获取里边的 user_id 将其挂载到req.body上
            req.body.user_id = result.user_id;  
        next();
        }catch(error){
            res.send({
                code:'2000',
                msg:'身份验证失败'
            });
        }

    }
}

// 4.记录用户访问日志的中间件：第三方中间件
const logUserVisitIfor =(req,res,next)=>{
    // 要求：获取客户端IP、访问时间、请求路径、请求类型、客户端信息
    let ip = req.ip;
    console.log(ip);//::ffff:127.0.0.1  在启动服务时加'0.0.0.0'参数就可以得到127.0.0.1
    let reqUrl = req.url;
    // console.log(reqUrl);
    let method = req.method;
    // console.log(method);
    let userAgent = req.headers['user-agent'];
    // console.log(userAgent);
    
    // 生成的文件路径：当前目录下的logs文件夹下 
    // 文件名是 ：当前年月日  后缀名为.log
    
    // 写入路径：
    let filepath = path.join(__dirname,'logs',moment().format('YYYYMMDD') + '.log');
    // 将所要的信息拼接起来：
    let str = `${ip} - ${reqUrl} - ${method} - ${userAgent}\n`

    // 写入文件：
    fs.appendFileSync( filepath , str);
    
    next();
}
app.use(logUserVisitIfor);//使用中间件




// ============================路由部分=======================================
// 路由定义：
// 1.测试数据路由:作用就是用来获取加密密码的---一次性路由，调用成功就删掉
// app.post('/api/v1/init_password', getPasswordCrypted,(req, res) => {
//     // res.send({
//     //     '初始密码是':req.body.password,
//     //     '加密后的密码是':req.body.passwordCrypted
//     // })  得到加密后的密码就可以就向数据库中写数据 加密方法不是固定的但是要先转化后截取截取完后再做拼接原原来的密码
// })

// 2.登录时做验证的路由：
// 将用户输入的账号密码和数据库中的做比对，有就登录成功没有就账号密码不正确
app.post('/api/v1/login', getPasswordCrypted ,(req, res) => {
    // 获取手机号密码：解构赋值
    let {mobile,passwordCrypted} = req.body;
    // 数据库查询数据比对：用mongoose的Model来操作：
    Model.findOne({mobile:mobile,password:passwordCrypted}).then((ret)=>{
        // ret存储的是数据库查到的数据
        // 判断是否查到：
        console.log(ret);
        if(!ret){
            res.send({
                code:'1000',
                msg:'账号或者密码不正确'
            });
        }else{
        //如果存在:登陆成功并将token返回给客户端，客户端会存储起来，每次请求都带着这个token，后端验证通过就返回数据
        res.send({
            code:'0',
            msg:'登录成功',
            jwt:
            //token令牌的组成部分：头部，载荷，签名
            // 生成jwt令牌时，一般不用手机号和比较隐私的数据
                "admin " +  
                // 
                jsonwebtoken.sign(
                    {
                        user_id: ret.userId,
                        mobile: ret.mobile,
                    },
                    // 读取的是文件.env的内容
                    jwt_secret
                ),                      
            });
        }
    })
})

// 3.获取用户信息的路由：使用中间件来验证token令牌
app.post('/api/v1/userinfo',cheackToken, (req, res) => {
    // 获取用户信息的id，将id作为查询条件去数据库里查询，如果可以查到就返回对应的用户信息
    // 解构赋值req.body里的id
    let {user_id} = req.body;
    Model.findOne({ userId: user_id }).then((ret) => {
        res.send({
            code: "0",
            msg: "成功",
            userinfo: {
                userId: ret.userId,
                // 返回手机号时一般是做隐藏返回182****2222 ：
                //方法一：从第一个字符开始截取截取7个字符 mobile: ret.mobile.substr(0, 7) + "****",
                //方法二：在定义schema手机号的时候定义正则时做手机号隐藏
                mobile: ret.mobile,
                headIcon: ret.headIcon,
                gender: ret.gender,
            },
        });
    });
})


// 启动服务：
// 启动服务时，加第二个参数'0.0.0.0'
app.listen(port, '0.0.0.0' ,() => console.log(`server is running at http://127.0.0.1:${port}!`));