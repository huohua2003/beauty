<template>
    <div>
        <!-- title -->
<<<<<<< HEAD
        <!-- <HeaderNav /> -->
        <div style="height: 50px">
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
=======
        <HeaderNav />
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
        <van-loading size="24px" type="spinner" vertical v-show="isLoading"
            >加载中...</van-loading
        >
        <div class="card">
            <van-card :key="item.id" v-for="item in list">
                <!-- title -->
                <template #title>
                    <div class="title">{{ item.product_name }}</div>
                </template>
                <!-- desc -->
                <template #desc>
                    <div class="desc">{{ item.product_desc }}</div>
                </template>
                <!-- price -->
                <template #price>
                    <div>{{ item.highest_price }}￥</div>
                </template>
                <!-- pic -->
                <template #thumb>
                    <van-image :src="item.kv_image"> </van-image>
                </template>

                <template #footer>
<<<<<<< HEAD
                    <van-button class="btn" size="mini" @click="gotoCard(item.id)"
=======
                    <van-button
                        class="btn"
                        size="mini"
                        @click="gotoCard(item.id)"
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
                        >加入购物车</van-button
                    >
                </template>
            </van-card>
        </div>
    </div>
</template>
<script>
import url from "@/config/url";
import Vue from "vue";
import HeaderNav from "@/components/Header/HeaderNav";
//列表
<<<<<<< HEAD
import {
    Toast,
    NavBar,
    Card,
    Tag,
    Button,
    Image as VanImage,
    Loading,
} from "vant";
Vue.use(NavBar);
Vue.use(Toast);
=======
import { Card, Tag, Button, Image, Loading } from "vant";
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
//项目
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
<<<<<<< HEAD
Vue.use(VanImage);
=======
Vue.use(Image);
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
Vue.use(Loading);
export default {
    data() {
        return {
<<<<<<< HEAD
            show: true,
=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
            list: [],
            isLoading: true,
        };
    },
<<<<<<< HEAD

    created() {
        this.$http.get(url.getExperience).then((ret) => {
            // console.log(ret.data.list);
=======
    created() {
        this.$http.get(url.getExperience).then((ret) => {
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
            this.list = ret.data.list;
            this.isLoading = false;
        });

        //通知 App.vue 隐藏 底部导航
<<<<<<< HEAD

=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
        // this.$store.commit("isShowFooter", false);
    },
    beforeDestroy() {
        //通知App.vue 显示底部导航
        this.$store.commit("isShowFooter", true);
    },
<<<<<<< HEAD
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
=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f

    components: {
        HeaderNav,
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
<<<<<<< HEAD
        // gotoDetail() {},
=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
        gotoCard(cartId) {
            //存储localStorage
            this.list.forEach((el) => {
                if (el.id == cartId) {
<<<<<<< HEAD
                    //判断vuex 中有没有商品 没有就加 
                    if (this.$store.state.cart.length > 0) {
                        let flag = true;
                        //vuex中有 内容 就循环
                        this.$store.state.cart.forEach((v) => {
                            //判断是否是点击的,id匹配就弹框 切换路径
                            //把 开关  改为 false  不执行下一步 if
                            if (v.id == cartId) {
                                
                                if (
                                    confirm(
                                        '您的购物车中已经有该商品了，点击"确定"去购物车'
                                    )
                                ){
=======
                    if (this.$store.state.cart.length > 0) {
                        let flag = true;
                        this.$store.state.cart.forEach((v) => {
                            if (v.id == cartId) {
                                if (confirm('您的购物车中已经有该商品了，点击"确定"去购物车')) {
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
                                    this.$router.push("/order");
                                    // console.log(this.$route.path);
                                }
                                flag = false;
                            }
                        });
<<<<<<< HEAD
                        // id 不匹配vuex中没有数据  然后加数据  
                        if (flag) {
                            console.log("123");
                            this.$store.commit("addCart", el);
                            // flag = false;
=======
                        if (flag) {
                            this.$store.commit("addCart", el);
                            flag = false;
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
                        }
                    } else {
                        this.$store.commit("addCart", el);
                    }
                }
            });
            localStorage.setItem(
                "cart",
                JSON.stringify(this.$store.state.cart)
            );
        },
    },
};
</script>
<style scoped>
<<<<<<< HEAD
.headerTitle {
    background-color: pink;
}
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
.card {
    margin-bottom: 50px;
}
.title {
    font-size: 16px;
    font-weight: 600;
}
.desc {
    font-size: 14px;
}

.btn {
    width: 80px;
    height: 30px;
    border: 1px solid hsl(27, 95%, 48%);
    color: rgb(241, 120, 7);
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
