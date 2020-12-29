<template>
    <div>
        <div style="margin-bottom: 66px">
            <van-nav-bar title="订单" />
            <van-card
                style="position: relative"
                v-for="(item, index) in list"
                :key="index"
            >
                <template #desc>
                    <div style="font-size: 16px">{{ item.product_desc }}</div>
                </template>
                <template #price>
                    <div style="font-size: 30px; margin-top: 20px">
                        ￥{{ item.highest_price }}
                    </div>
                </template>
                <template #title>
                    <div style="font-size: 20px; font-weight: bold">
                        {{ item.product_name }}
                    </div>
                </template>
                <template #num>
                    <div style="font-size: 20px; margin: 0 0 5px 120px">
                        <button @click="dec(item, index)">-</button>
                        ×{{ item.sku_num }}
                        <button @click="add(item, index)">+</button>
                    </div>
                    <div style="font-size: 25px">
                        总价：￥{{ item.sku_num * item.default_price }}
                    </div>
                </template>
                <template #thumb>
                    <van-image width="90" height="90" :src="item.kv_image" />
                </template>
                <template #footer>
                    <input
                        type="checkbox"
                        v-model="checkArr"
                        :value="item.id"
                        style="position: absolute; top: 10px; right: 10px"
                        @change="toggleCheck(item.id)"
                    />
                </template>
            </van-card>
        </div>

        <van-submit-bar
            :price="total + '00' - 0"
            button-text="提交订单"
            @submit="onSubmit"
            class="bottom"
        >
            <input type="checkbox" v-model="allChecked" @change="isCheckedAll"
                />全选
        </van-submit-bar>
    </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Card, Image as VanImage, SubmitBar, Checkbox } from "vant";
import uri from '@/config/url'

Vue.use(NavBar);
Vue.use(Card);
Vue.use(VanImage);
Vue.use(SubmitBar);
Vue.use(Checkbox);
export default {
    data() {
        return {
            allChecked: false,
            list: [],
            checkArr: [],
        };
    },
    methods: {
        // 提交订单
        onSubmit() {
            let num = 0;
            this.checkArr.forEach((v) => {
                this.list.forEach(el=>{
                    if(v==el.id){
                        num += el.sku_num * el.default_price;
                    }
                })
            });
            if(num===0){
                return false;
            }
            this.$http.post("https://m.28sjw.com/order/getQR.php",`_s=Qqwsd&_f=${num}&_t=2`).then(ret=>{
                // console.log(ret);
                location.href="http:"+ret.qr_code
            })
        },
        // 全选
        isCheckedAll() {
            this.checkArr = [];
            console.log('123');
            if (this.allChecked) {
                this.list.forEach((el) => {
                    this.checkArr.push(el.id);
                });
            }
        },
        // 单选
        toggleCheck(id) {
            this.allChecked =
                this.checkArr.length === this.$store.state.cart.length
        },

        add(v, k) {
            this.$store.state.cart[k].sku_num++;
            localStorage.setItem(
                "cart",
                JSON.stringify(this.$store.state.cart)
            );
            this.list = this.$store.state.cart;
        },
        dec(v, k) {
            if (this.$store.state.cart[k].sku_num == 1) {
                if (confirm("确定不要了吗")) {
                    this.$store.state.cart.splice(k, 1);
                    localStorage.setItem(
                        "cart",
                        JSON.stringify(this.$store.state.cart)
                    );
                    this.list = this.$store.state.cart;
                }
                return false;
            }
            this.$store.state.cart[k].sku_num--;
            localStorage.setItem(
                "cart",
                JSON.stringify(this.$store.state.cart)
            );
            this.list = this.$store.state.cart;
        },
    },
    created() {
        if(this.$store.state.cart.length==0){
            document.write('<h1 style="text-align:center">当前购物车没有东西哦，去首页看看吧</h1>')
        }
        this.list = this.$store.state.cart;

},
    computed: {
        total() {
            let num = 0;
            this.checkArr.forEach((v) => {
                this.list.forEach(el=>{
                    if(v==el.id){
                        num += el.sku_num * el.default_price;
                    }
                })
            });
            return num
        },
    },
};
</script>
<style lang="scss" scpoed>
.bottom {
    margin-bottom: 50px;
}
</style>