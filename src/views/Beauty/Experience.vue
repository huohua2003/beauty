<template>
    <div>
        <!-- title -->
        <HeaderNav />
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
                    <van-button
                        class="btn"
                        size="mini"
                        @click="gotoCard(item.id)"
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
import { Card, Tag, Button, Image, Loading } from "vant";
//项目
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Image);
Vue.use(Loading);
export default {
    data() {
        return {
            list: [],
            isLoading: true,
        };
    },
    created() {
        this.$http.get(url.getExperience).then((ret) => {
            this.list = ret.data.list;
            this.isLoading = false;
        });

        //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
    },
    beforeDestroy() {
        //通知App.vue 显示底部导航
        this.$store.commit("isShowFooter", true);
    },

    components: {
        HeaderNav,
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        gotoCard(cartId) {
            //存储localStorage
            this.list.forEach((el) => {
                if (el.id == cartId) {
                    if (this.$store.state.cart.length > 0) {
                        let flag = true;
                        this.$store.state.cart.forEach((v) => {
                            if (v.id == cartId) {
                                if (confirm('您的购物车中已经有该商品了，点击"确定"去购物车')) {
                                    this.$router.push("/order");
                                    // console.log(this.$route.path);
                                }
                                flag = false;
                            }
                        });
                        if (flag) {
                            this.$store.commit("addCart", el);
                            flag = false;
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
</style>