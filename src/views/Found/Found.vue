<template>
  
    <div >

      <van-loading size="24px" vertical v-show='isLoding'>加载中...</van-loading>

      <van-grid :column-num="2">
               <van-grid-item v-for="(item,index) in fondList" :key="index" >
                   <van-image :src="item.picUrl" />
                    <div  @click="tofondDetail(item.id)">{{item.fullName |wenzi}}</div>
               </van-grid-item>
     </van-grid>
         <!-- <ul>
             <li v-for="(item,index) in fondList" :key="index">
                 <div class="picture"><img :src="item.picUrl" alt=""></div>
                 <div  @click="tofondDetail(item.id)">{{item.fullName}}</div>
             </li>
         </ul> -->
    </div>

</template>
<script>

import Vue from 'vue';
import { Loading,Sticky,Grid,GridItem} from 'vant';
import uri from '@/config/url';
Vue.use(Grid);
Vue.use(GridItem);
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
                // console.log(ret.data.productList);
                this.fondList=ret.data.productList
                // console.log(this.fondList);
            this.isLoding=false;
      })
       },
       tofondDetail(id){
         this.$router.push("/found/"+id)
        // console.log(id);
       },
   },
   filters:{
       wenzi(val){
          let str="";
          str=val.substr(0,18)+"...";
           return str
       }
   }
};
</script>

<style lang="scss" scoped>

.fond_top{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    font-weight: bold;
    position:fixed;
    top:0;
}
ul{
    margin-top: 14px;
    display:block;
    margin-bottom:40px;
}
ul li{
    margin-top:6px;
}
.picture{
    width:100%;
    height:300px;
}
.picture img{
    width: 100%;
    height:100%;
}
</style>