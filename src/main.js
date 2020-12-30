import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/http'

Vue.config.productionTip = false
Vue.prototype.$http = axios;


// 刷新的时候同步vuex中的jwt
let jwt = JSON.parse(localStorage.getItem("jwt"));
let cart = JSON.parse(localStorage.getItem("cart"));
if(jwt){
  store.commit("setjwt",jwt);
}
if(cart){
  store.commit("setCart",cart);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
