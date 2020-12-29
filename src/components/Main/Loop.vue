<template>
    <div>
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item class="img">
                <img
                    src="http://img.daimg.com/uploads/allimg/190807/1-1ZPG40A80-L.jpg"
                    alt=""
                />
            </van-swipe-item>
            <van-swipe-item class="img">
                <img
                    src="http://img.daimg.com/uploads/allimg/190807/1-1ZPG400480-L.jpg"
                    alt=""
                />
            </van-swipe-item>

            <van-swipe-item class="img">
                <img
                    src="http://img.daimg.com/uploads/allimg/190830/1-1ZS00009350-L.jpg"
                    alt=""
                />
            </van-swipe-item>

            <van-swipe-item class="img">
                <img
                    src="http://img.daimg.com/uploads/allimg/190727/1-1ZHGJK20-L.jpg"
                    alt=""
                />
            </van-swipe-item>
            >
        </van-swipe>
    </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data() {
        return {
            value: "",
        };
    },
};
</script>
<style lang="scss" scoped>
   .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
img {
    width: 100%;
    height: 100%;
}
.img {
    height: 150px;
    width: 375px;
}
</style>
