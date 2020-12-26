import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowFooter:true,//是否显示底部导航
    jwt:"",
  },
  mutations: {
    isShowFooter(state,val){
      state.isShowFooter = val; 
    },
    // 设置jwt,同时储存在localstsrege中
    setjwt(state,jwt){
      state.jwt = jwt;
      localStorage.setItem('jwt',JSON.stringify(jwt));
    }
  },
  actions: {
  },
  modules: {
  }
})
