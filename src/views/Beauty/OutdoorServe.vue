<template>
    <div>
        <div style="height:50px">
            <div :class="{ header: show }">
                <van-nav-bar
                    title="彩妆风采"
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
        <!-- mian -->
        <van-grid class="cai" v-model="listUp">
            <img :src="tmp.src" alt="" />
            <!-- {{src="listUp[0].src"}} -->
            <div class="msg">
                <div class="content">
                    <h1 style="color:#fff">{{ tmp.title }}</h1>
                    <span style="color:#fff;line-height:28px">
                        {{ tmp.desc }}
                    </span>
                </div>
            </div>
        </van-grid>
        <van-grid
            :column-num="2"
            :square="true"
            :gutter="10"
            style="margin-bottom:50px"
        >
            <van-grid-item v-for="item in list" :key="item.id" @click="gotoDetail(item.id)">
                <van-image
                    style="width:160px;height:110px;"
                    :src="item.kv_image"
                />
                <span style="font-size:12px">{{ item.product_name }}</span>

                <span>￥{{ item.default_ori_price }}</span>
            </van-grid-item>
        </van-grid>
    </div>

</template>

<script>
import HeaderNav from "@/components/Header/HeaderNav";
import url from "@/config/url";
import Vue from "vue";
import { NavBar, Toast, Grid, GridItem, Image,Loading } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Loading);

export default {
    data() {
        return {
            listUp: [],
            list: [],
            tmp: {},
            show: true,
            isLoading: true,
        };
    },
    components: {
        HeaderNav,
    },
    created() {
        this.$http.get(url.getCai1).then((ret) => {
            // console.log(ret.nodes);
            // let tmp = [];
            // ret.nodes[3].nodes.forEach((el) => {
            //     tmp.push(el);
            // });
            // console.log(tmp);
            this.listUp.push(
                ret.nodes[0].nodes,
                ...ret.nodes[3].nodes
                // {v:ret.nodes[3].nodes},
            );
            this.tmp = {
                src: this.listUp[0].src,
                title: this.listUp[0].title,
                desc: this.listUp[0].desc,
            };
            
            // console.log(this.listUp);
        });

        this.$http.get(url.getCaiShop).then((ret) => {
            console.log(ret.data.pageData);
            this.list = ret.data.pageData;
             
        });
        this.isLoading = false;

        //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
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
        gotoDetail(id){
            this.$router.push("/outdoorserve/" + id);
// console.log(id);
        }
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
.cai {
    // height: 400px;
    // border: 1px solid #000;
}
.cai img {
    width: 100%;
    height: 300px;
}
.cai .msg {
    width: 100%;
    height: 300px;
    background-color: #575757;
}
.cai .msg .content {
    width: 240px;
    height: 240px;
    // border: 1px solid #fff;
    margin: 25px auto;
}
</style>
