<template>
    <div style="height:50px">
       <div :class="{header:show}">
            <van-nav-bar
                title="本店商品"  
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
                class="headerTitle"
            />
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { NavBar, Toast, Card, Tag,Button } from "vant";
Vue.use(NavBar);
Vue.use(Toast);
export default {
    data() {
        return {
            show:true,
        };
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
    methods:{
          onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="scss" scoped>
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
