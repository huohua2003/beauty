<template>
    <div>
        <van-tabbar v-model="active" @change="changTab">
            <van-tabbar-item >
                <van-icon 
                class="iconfont icon-meiyan"
                slot="icon"
                />
                <span>美吧</span>
            </van-tabbar-item>

            <van-tabbar-item >
                <van-icon 
                class="iconfont icon-74wodedingdan"
                slot="icon"
                />
                <span>订单</span>
            </van-tabbar-item>

             <van-tabbar-item >
                <van-icon 
                class="iconfont icon-find"
                slot="icon"
                />
                <span>发现</span>
            </van-tabbar-item>

             <van-tabbar-item >
                <van-icon 
                class="iconfont icon-wode"
                slot="icon"
                />
                <span>我的</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import "@/assets/icon/iconfont.css"
import Vue from "vue";
import { Tabbar, TabbarItem,Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
    data(){
        return{
            active:0,
            url:[
                "/beautyplug",
                "/order",
                "/found",
                "/my",    
            ]
        };
    },
    created(){
        //根据页面的地址纠正 底部的索引
        console.log(this.$route.path);
        this.active = this.url.indexOf(this.$route.path)>=0 ?this.url.indexOf(this.$route.path):0;
    },
    methods:{
        changTab(index){
            // console.log(index);
            this.$router.push(this.url[index]);
        }
    }
};
</script>
