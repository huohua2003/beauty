<template>
    <div>
<<<<<<< HEAD
        <div style="height:50px">
            <div :class="{ header: show }">
                <van-nav-bar
                    title="客户反馈"
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
        <van-grid :column-num="2" square style="margin-bottom:50px">
            <van-grid-item v-for="(item, index) in list" :key="index">
                <img class="img" :src="item.img" alt="" />

                <div class="title">
                    {{ item.title | parserTitle }}
                </div>
            </van-grid-item>
=======
        <HeaderNav />
        <!-- mian -->
        <van-grid :gutter="10" :column-num="2" square >
            <van-grid-item
                v-for="value in 6"
                :key="value"
                icon="photo-o"
                text="门店名称"
            />
            <!-- <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->

>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
        </van-grid>
    </div>
</template>
<script>
<<<<<<< HEAD
import url from "@/config/url";
import HeaderNav from "@/components/Header/HeaderNav";
import Vue from "vue";
import { Loading, NavBar, Toast, Grid, GridItem, Image } from "vant";

Vue.use(NavBar);
Vue.use(Toast);
=======
import HeaderNav from "@/components/Header/HeaderNav";

import Vue from "vue";
import { Grid, GridItem,Image } from "vant";
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
<<<<<<< HEAD
Vue.use(Loading);
export default {
    data() {
        return {
            list: [],
            show:true,
            isLoading: true,
        };
    },
    components: {
        HeaderNav,
    },
    created() {
        this.$http.get(url.getOrder).then((ret) => {
            console.log(ret.html);

            //  this.list = ret.html;

            ret.html.forEach((v) => {
                this.list.push({ img: v.img310.img, title: v.title });
                this.isLoading = false;
           });

            console.log(this.list);
        });

        //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
    },
       mounted(){
        //监听滚动条的位置
        window.addEventListener("scroll",()=>{
            //获取滚动跳的位置
            let top = document.documentElement.scrollTop;
            // console.log(top);
            if(top > 300){
                this.show = true;
                // console.log(999);
            }else{
                this.show = false;
                // console.log(555);
            }
        })
    },
    filters: {
        parserTitle(title) {
            //判断是否有title
            if (title) {
                let str = "";

                return title.substr(0, 15) + "...";
                console.log(title);
            } else {
                return str;
            }
        },
    },
     methods:{
          onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="scss" scoped>
.img {
    margin-top: 0;
    width: 150px;
    height: 100px;
    border-radius: 5%;
    border: 1px solid #000;
}
.title {
    width: 150px;
    height: 20px;
}
.headerTitle {  
        background-color: pink;
    }
    .header{
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 0;
    }
</style>
=======
export default {
    components: {
        HeaderNav,
    },
};
</script>
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
