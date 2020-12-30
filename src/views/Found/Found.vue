<template>
  
<<<<<<< HEAD
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
=======
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
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
    </div>

</template>
<script>

import Vue from 'vue';
<<<<<<< HEAD
import { Loading,Sticky,Grid,GridItem} from 'vant';
import uri from '@/config/url';
Vue.use(Grid);
Vue.use(GridItem);
=======
import { Loading,Sticky } from 'vant';
import uri from '@/config/url';
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
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
<<<<<<< HEAD
                // console.log(ret.data.productList);
=======
                console.log(ret.data.productList);
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
                this.fondList=ret.data.productList
                // console.log(this.fondList);
            this.isLoding=false;
      })
       },
       tofondDetail(id){
         this.$router.push("/found/"+id)
<<<<<<< HEAD
        // console.log(id);
       },
   },
   filters:{
       wenzi(val){
          let str="";
          str=val.substr(0,18)+"...";
           return str
       }
=======
        console.log(id);
       },
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
   }
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD

=======
.fond{
    margin-top: 40px;
    margin-bottom:70px;
}
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
.fond_top{
    width:100%;
    height:40px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
    font-weight: bold;
    position:fixed;
    top:0;
<<<<<<< HEAD
=======
    background: pink;
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
}
ul{
    margin-top: 14px;
    display:block;
    margin-bottom:40px;
}
ul li{
    margin-top:6px;
}
<<<<<<< HEAD
.picture{
    width:100%;
    height:300px;
}
.picture img{
    width: 100%;
    height:100%;
=======
.picture img{
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
}
</style>