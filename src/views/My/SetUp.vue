<<template>
    <div>
<<<<<<< HEAD
    <!--头部 -->
    <div>
        <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
 <!--列表  -->
  <div class="list">
   <div>
      <p>账号</p>
    <ul>
    <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3547311606,3881878335&fm=26&gp=0.jpg"/>账号与安全<span>></span></li>
    <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=290966220,2530530497&fm=26&gp=0.jpg"/>隐私设置<span>></span></li>
    </ul>
   <van-divider />
  
   </div>
    <div>
      <p>通用</p>
    <ul>
    <li><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2064640440,2969962468&fm=26&gp=0.jpg"/>通知设置<span>></span></li>
    <li><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2564527325,2632133742&fm=26&gp=0.jpg"/>动态壁纸<span>></span></li>
    <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3547311606,3881878335&fm=26&gp=0.jpg"/>通用设置<span>></span></li>
    </ul>
   <van-divider />

   </div>
   <div>
      <p>关于</p>
    <ul>
    <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2833229126,822167682&fm=26&gp=0.jpg"/>用户协议<span>></span></li>
    <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3547311606,3881878335&fm=26&gp=0.jpg"/>关于<span>></span></li>
    <li><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2713771431,1263533124&fm=26&gp=0.jpg"/>社区自律公约<span>></span></li>
    <li><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3628945469,3710555361&fm=26&gp=0.jpg"/>第三方SDK列表<span>></span></li>
    </ul>
   <van-divider />
   
   </div>   
     <div>
      <p>设置</p>
    <ul>
    <li><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2564527325,2632133742&fm=26&gp=0.jpg"/>账号切换<span>></span></li>
    <li @click="setUp"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3547311606,3881878335&fm=26&gp=0.jpg"/>退出登录<span>></span></li>
    </ul>
   <van-divider />
   </div>   
  </div>
    </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Toast ,Divider } from "vant";
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Divider);


export default {
  // vuex 底部导航展示和隐藏
  created() {
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy() {
    this.$store.commit("isShowFooter", true);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    setUp(){
      localStorage.removeItem('jwt');
      Toast.success('已退出此账号');
   
        
    }
  },
};
</script>

<style lang="scss">
.list{
  p{
    font-size: 14px;
    color: #666;
  }
  ul{
    margin-top: 10px;
  }
  li{
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 14px;
    position: relative;
    span{
      position: absolute;
      right: 20px;
      color: #999;
      font-size: 16px;
    }
    img{
      margin-right: 10px;
      width: 15px;
      height: 15px;
    }
  }
}
</style>
=======
        <div>我是设置页面</div>
    </div>
</template>
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
