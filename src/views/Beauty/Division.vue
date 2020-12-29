<template>
    <div>
        <div style="height:50px">
            <div :class="{ header: show }">
                <van-nav-bar
                    title="美丽日记"
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
        <van-grid class="container" :column-num="1" :border="false">
            <van-grid-item v-for="item in list" :key="item.id">
                <div class="box">
                    <img class="user_img" :src="item.img" />
                    <span>{{ item.title | parserTitle }}</span>
                    <div class="msg">
                        <img :src="item.avatar" alt="" />
                        <span>{{ item.user_nickname }}</span>
                    </div>
                    <div class="price">
                        <img
                            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3293216886,2500982803&fm=26&gp=0.jpg"
                            alt=""
                        />

                        <span class="board">{{ item.board }}</span>
                        <span class="b_price">{{ item.price }}￥</span>
                    </div>
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import url from "@/config/url";
import HeaderNav from "@/components/Header/HeaderNav";
import Vue from "vue";
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
            show: true,
            isLoading: true,
        };
    },
    components: {
        HeaderNav,
    },
    created() {
        this.$http.get(url.getFeedBack).then((ret) => {
            console.log(ret.html);

            //  this.list = ret.html;

            ret.html.forEach((v) => {
                this.list.push({
                    img: v.diary.compare_photo_after,
                    title: v.diary.share_con,
                    //用户名
                    user_nickname: v.diary.nickname,
                    // 头像
                    avatar: v.diary.avatar_img,
                    //
                    board: v.diary.tao.lable,
                    price: v.diary.tao.price_discount,
                });
            });
            this.isLoading = false;

            // console.log(this.list);
        });

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
    filters: {
        parserTitle(title) {
            //判断是否有title
            if (title) {
                let str = "";

                return title.substr(0, 50) + "...";
                console.log(title);
            } else {
                return str;
            }
        },
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="scss" scoped>
.container {
    margin-bottom: 50px;
}
.headerTitle {
    background-color: pink;
}
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
.img {
    margin-top: 0;
    width: 150px;
    height: 100px;
    border-radius: 5%;
    // border: 1px solid #000;
}
.title {
    width: 150px;
    height: 20px;
}
.box {
    width: 100%;
    height: 400px;
    border-bottom: 2px solid rgb(251, 211, 211);
    // border-radius: 20px;
    background-color: #fff;
}
.box .user_img {
    width: 100%;
    height: 240px;
    border-radius: 20px;
}
.box .msg {
    margin-top: 10px;
    width: 100%;
    height: 30px;
    // border: 1px solid red;
}
.box .msg img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.box .msg span {
    font-size: 20px;
    margin-left: 10px;
    vertical-align: top;
}
.box .price {
    width: 100%;
    height: 50px;
    border: 1px solid #468735;
    border-radius: 30px;
}
.box .price img {
    width: 50px;
    height: 50px;
    border-radius: 38px;
}
.box .price .board {
    line-height: 50px;
    vertical-align: top;
    margin-left: 50px;
}
.box .price .b_price {
    vertical-align: top;
    line-height: 50px;
    margin-left: 60px;
    font-size: 20px;
    font-weight: 500;
    color: #ff527f;
    margin-left: 60px;
}
</style>
