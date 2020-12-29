<template>
    <div>
        <!-- title -->
        <!-- <HeaderNav /> -->
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
        <van-loading size="24px" type="spinner" vertical v-show="isLoading"
            >加载中...</van-loading
        >
        <div class="card">
            <van-card :key="item.id" v-for="item in list" @click="gotoDetail()">
                <!-- title -->
                <template #title>
                    <div class="title">{{ item.product_name }}</div>
                </template>
                <!-- desc -->
                <template #desc>
                    <div class="desc">{{ item.product_desc }}</div>
                </template>
                <!-- price -->
                <template #price>
                    <div>{{ item.highest_price }}￥</div>
                </template>
                <!-- pic -->
                <template #thumb>
                    <van-image :src="item.kv_image"> </van-image>
                </template>

                <template #footer>
                    <van-button class="btn" size="mini" @click="gotoCard"
                        >加入购物车</van-button
                    >
                </template>
            </van-card>
        </div>
    </div>
</template>
<script>
import url from "@/config/url";
import Vue from "vue";
import HeaderNav from "@/components/Header/HeaderNav";
//列表
import { Toast ,NavBar,Card, Tag, Button, Image, Loading} from "vant";
Vue.use(NavBar);
Vue.use(Toast);
//项目
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Image);
Vue.use(Loading);
export default {
    data() {
        return {
            show:true,
            list: [],
            listCard: [],
            isLoading: true,
            obj:{}
        };
    },
    created() {
        this.$http.get(url.getExperience).then((ret) => {
            // console.log(ret.data.list);
            this.list = ret.data.list;
            this.isLoading = false;
        });

        //通知 App.vue 隐藏 底部导航
        // this.$store.commit("isShowFooter", false);
    },
    beforeDestroy() {
        //通知App.vue 显示底部导航
        this.$store.commit("isShowFooter", true);
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

    components: {
        HeaderNav,
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        gotoDetail(){

        },
        gotoCard(cardId) {
            //存储localStorage
            // this.listCard.push()
            // console.log(id)
            // this.$router.push('/experience/'+)
            this.list.forEach((el, index) => {
                if (el.id == cardId) {
                    this.obj.name = el.product_name;
                    this.obj.desc = el.product_desc;
                    this.obj.price = el.default_price;
                    this.obj.image = el.kv_image;
                    this.obj.id = el.id;
                    console.log(this.listCard);
                    if (this.listCard.length === 0) {
                        this.listCard.push(this.obj);
                    } else {
                        console.log(this.obj.id);
                        this.listCard.forEach((v) => {
                            if (this.obj.id == v.id) {
                                if (confirm("购物车中已经有该商品了，点击“确定”去查看" )) {
                                    this.$router.push("/order");
                                }
                                return false;
                            } else {
                                console.log(1);
                                this.listCard.push(this.obj);
                            }
                        });
                    }
                }
            });

            // localStorage.setItem("cart", JSON.stringify(el));
            // localStorage.setItem("cart", JSON.stringify(this.listCart));
            console.log(this.listCard);
        },
    },
};
</script>
<style scoped>
.headerTitle{
     background-color: pink;
}
.header{
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 0;
    }
.card {
    margin-bottom: 50px;
}
.title {
    font-size: 16px;
    font-weight: 600;
}
.desc {
    font-size: 14px;
}

.btn {
    width: 80px;
    height: 30px;
    border: 1px solid hsl(27, 95%, 48%);
    color: rgb(241, 120, 7);
}
</style>
