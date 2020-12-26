<template>
  
    <div class="fond" >
      <div class="fond_top">发现，记录美好生活</div>
      <van-loading size="24px" vertical v-show='isLoding'>加载中...</van-loading>
         <ul>
             <li v-for="(item,index) in fondList" :key="index">
                 <div class="picture"><img :src="item.picUrl" alt=""></div>
                 <div>{{item.fullName}}</div>
                <div class="font_main">
                     <button @click="tofondDetail(item.id)">查看详情</button>
                </div>
             </li>
         </ul>
    </div>

</template>
<script>

import Vue from 'vue';
import { Loading,Sticky } from 'vant';
import uri from '@/config/url';
Vue.use(Sticky);
Vue.use(Loading);
export default {
   data(){
       return {
           fondList:[],
           isLoding:true,
       }
   },

created(){
      this.getData();
},
   methods:{
       getData(){
           this.$http.get(uri.getFond).then((ret)=>{
                console.log(ret.data.productList);
                this.fondList=ret.data.productList
                // console.log(this.fondList);
            this.isLoding=false;
      })
       },
       tofondDetail(id){
         this.$router.push("/found/"+id)
        console.log(id);
       },
   }
};
</script>

<style lang="scss" scoped>
.fond{
    margin-top: 40px;
    margin-bottom:70px;
}
.fond_top{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    font-weight: bold;
    position:fixed;
    top:0;
    background: pink;
}
ul{
    margin-top: 14px;
    display:block;
    margin-bottom:40px;
}
ul li{
    margin-top:6px;
}
.picture img{
}
</style>