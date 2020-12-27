<template>
    <div>
         <HeaderNav />
        <!-- mian -->
        <van-grid :gutter="10" :column-num="2" square >
            <van-grid-item
                v-for="value in 6"
                :key="value"
                icon="photo-o"
                text="上门服务123"
            />
            <!-- <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->

        </van-grid>
    </div>
</template>
<script>
import HeaderNav from "@/components/Header/HeaderNav";

import Vue from "vue";
import { Grid, GridItem,Image } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
export default {
    components: {
        HeaderNav,
    },
     created(){
          this.$http
            .get("https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/order")
            .then((ret) => {
                console.log(ret);
                // this.list = ret.data.list;
                // this.isLoading = false;
            });
           
            //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
    },
};
</script>