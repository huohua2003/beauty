<template>
    <div>
         <div class="deheader">
            <!-- 头部 -->
            <div class="degoBack" @click="goBack">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
                    alt=""
                />
            </div>
            <div class="detitle">
               {{showList.category}}
            </div>
        </div>
        <van-loading size="24px" vertical v-show='isLoding'>加载中...</van-loading>
        <div class="detailmain">
                <div class="picture"><img :src="showList.picUrl" alt=""></div>
                <div><span class="goodsName">商品名称：</span>{{showList.fullName}}</div>
                <div><span class="goodsName">制作公司：</span>{{showList.fullProviderName}}</div>
                <div><span class="goodsName">商品产地：</span>{{showList.location}}</div>
                <div><span class="goodsName">商品价格：</span>{{showList.price}}元</div>
        </div>
    </div>
</template>

<script>
import uri from '@/config/url'
export default {
    data(){
        return {
            list:[],
            showList:{},
            isLoding:true,
        }
    },
    created(){
        this.$http.get(uri.getFond+`?id=${this.$route.params.id}`).then(ret=>{
            console.log(ret);
             this.list=ret.data.productList
           this.list.forEach((el,index) => {
              if(el.id==this.$route.params.id){
                  this.showList=el
              }
               
           });
           this.isLoding=false;
           console.log(this.showList);
        })
    },
    methods:{
    goBack(){
         this.$router.go(-1);
    }
    }
}
</script>

<style lang="scss",scoped>
.deheader {
    position: fixed;
    background-color:pink;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
}
.degoBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
}
.degoBack img {
    width: 30px;
}
.detitle {
    font-size: 17px;
    line-height: 44px;
    width: 100vw;
    text-align: center;
}
.detailmain{
    padding-top: 44px;
}
.detailmain div{
    margin-bottom: 10px;
}
.goodsName{
    font-weight: bold;
    font-size: 16px;
}

</style>