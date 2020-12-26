import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/http'

Vue.config.productionTip = false
Vue.prototype.$http = axios;


// 刷新的时候同步vuex中的jwt
let jwt = JSON.parse(localStorage.getItem("jwt"));
if(jwt){
  store.commit("setjwt",jwt);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
