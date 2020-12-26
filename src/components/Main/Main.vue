<template>
    <div>
         <van-grid :column-num="2" :square="true" :gutter="10" class="main" v-model="active"  >
            <van-grid-item
                @click="gotoProject(item.id)"
                v-for="item in list"
                :key="item.id"
            >
                <van-image :src="item.img" />
                <span>{{ item.fullname }}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, Image } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);


export default {
     data() {
        return {
            active:0,
            list: [],
            url: ["/experience", "/outdoorserve", "/storeview", "/division"],
        };
    },
    methods: {
        gotoProject(index) {
            console.log(this.url[index]);
            this.$router.push(this.url[index-1]);

        },
    },
    created() {

        //请求数据
        this.$http
            .get(
                "https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/index"
            )
            .then((ret) => {
                console.log(ret.data);
                this.list = ret.data;
            });
            
        
    },
   
};
</script>
<style lang="scss" scoped>
   .main {
    margin-top: 30px;
    padding-bottom: 20px;
}
</style>
