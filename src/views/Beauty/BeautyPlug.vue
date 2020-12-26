<template>
    <div class="container">
        <Header />
        <!-- loop -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- main -->
        <van-grid :column-num="2" :square="true" :gutter="10" class="main"
        >
            <van-grid-item
                @click="changeTab"
                v-for="value in 4"
                :key="value"
                icon="photo-o"
                text="文字"
                
            />
        </van-grid>

        <router-view></router-view>
    </div>
</template>
<script>
//搜索框
import Header from "@/components/Header/HeaderNav";
//轮播图
import Vue from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);

//main
Vue.use(Grid);
Vue.use(GridItem);

export default {
    components: {
        Header,
    },
    methods:{
        changeTab(){
            console.log(1111);
        }
    }
};
</script>
<style lang="scss">
.container{
    background-color: pink;
    height: 616px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.main{
    margin-top: 30px;
}
</style>
