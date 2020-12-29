import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let shop = JSON.parse(localStorage.getItem('cart'));
let shopTmp = [];
if (!shop == null) {
  shopTmp = shop;
}

// console.log(shop);
export default new Vuex.Store({
  state: {
    isShowFooter: true, //是否显示底部导航
    jwt: "",
    //化妆品
    shop: shopTmp,
    cart: [],
  },
  mutations: {
    isShowFooter(state, val) {
      state.isShowFooter = val;
    },
    // 设置jwt,同时储存在localstsrege中
    setjwt(state, jwt) {
      state.jwt = jwt;
      localStorage.setItem('jwt', JSON.stringify(jwt));
    },
    addCart(state, goods) {
      state.cart.push(goods)
    },
    setCart(state, goods) {
      state.cart = goods
    },
  },
  actions: {},
  modules: {}
})