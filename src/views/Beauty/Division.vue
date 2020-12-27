<template>
    <div>
        <HeaderNav />
        <!-- mian -->
       <van-grid  :column-num="2" square>
            <van-grid-item
                v-for="(item,index) in list"
                :key="index"
                text="美体师"
            >
                <van-image class="img" :src="item.img" />
                 <span>美体师</span>
            </van-grid-item>
            
        
        </van-grid> 
       
     
    </div>
</template>
<script>
import url from "@/config/url";
import HeaderNav from "@/components/Header/HeaderNav";
import Vue from "vue";
import { Grid, GridItem, Image } from "vant";

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
export default {
    data() {
        return {
            list: [],
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
                this.list.push(
                    {img:v.img310.img,}
                );
                
            });
                
            console.log(this.list);
        });
        

        //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
    },
};
</script>
<style lang="scss" scoped>
    .img{
        width: 150px;
        height: 150px;
    }
</style>