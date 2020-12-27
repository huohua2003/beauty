<template>
    <div>
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
};
</script>
