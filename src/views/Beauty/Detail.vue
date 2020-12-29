<template>
    <div>
        <div style="height:50px">
            <div :class="{ header: show }">
                <van-nav-bar
                    title="本店商品"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    class="headerTitle"
                />
            </div>
        </div>

        <van-loading size="24px" type="spinner" vertical v-show="isLoading"
            >加载中...</van-loading
        >

        <van-grid class="container" :column-num="1" :border="false">
            <van-grid-item>
                <div class="box">
                    <img  class="img_h" :src="showlist.kv_image" />
                    <h2>{{showlist.product_name}}</h2>
                    <span>{{showlist.product_name_en}}</span>
                    <h3>{{showlist.product_desc}}</h3>
                    <span>￥{{showlist.highest_price}}</span>
                    
                    <div>数量:{{showlist.sku_num}}</div> 

                    <div class="cart">加入购物车</div>

                </div>
            </van-grid-item>
        </van-grid>
    </div>
    <!-- {{showlist.kv_image}} -->
</template>
<script>
import Vue from "vue";
import uri from "@/config/url";
import HeaderNav from "@/components/Header/HeaderNav";
import { Loading, NavBar, Toast, Grid, GridItem, Image } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Loading);
export default {
    data() {
        return {
            list: [],
            showlist: {},
            show: true,
            isLoading: true,
        };
    },
    created() {
        this.$http
            .get(uri.getCaiShop + `?id=${this.$route.params.id}`)
            .then((ret) => {
                //    console.log(ret);
                this.list = ret.data.pageData;
                console.log(this.list);
                this.list.forEach((el) => {
                    el.sku_num = 1;
                    if (el.id == this.$route.params.id) {
                        this.showlist = el;
                    }
                });
                this.isLoading = false;

                console.log(this.showlist);
                //    console.log(this.showlist.kv_image);
            });

            
    },
    mounted() {
        //监听滚动条的位置
        window.addEventListener("scroll", () => {
            //获取滚动跳的位置
            let top = document.documentElement.scrollTop;
            // console.log(top);
            if (top > 300) {
                this.show = true;
                // console.log(999);
            } else {
                this.show = false;
                // console.log(555);
            }
        });
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="scss" scoped>
.headerTitle {
    background-color: pink;
}
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
.container{
    margin-bottom: 50px;
}
.box{
    top:0;
    width: 100%;
    // border:1px solid red ;
    
  
}
.box .img_h{
    width: 100%;
    height:400px;
}
.box .cart{
    margin-top: 220px;
    width: 200px;
    height: 40px;
    border: 1px solid #000;
    border-radius: 40px;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
}
</style>
