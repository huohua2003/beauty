import Vue from 'vue'
import VueRouter from 'vue-router'



//获取 VueRouter 原型上的 push
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location){
    return originalPush.call(this,location).catch((err) => err);
}
//导入路由模块

import beautyplugRouter from './routes/beautyplug'
import foundRouter from './routes/found'
import myRouter from './routes/my'
import orderRouter from './routes/order'



Vue.use(VueRouter)

const routes = [
    ...beautyplugRouter,
    foundRouter,
    myRouter,
    orderRouter,
    {path:'/',redirect:"/beautyplug"}
  
];
const router = new VueRouter({
  mode:'history',
  routes,
  base: process.env.BASE_URL,
})

export default router
