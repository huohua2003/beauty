<template>
    <div>
        <h1  style="margin-top: 66px;text-align:center;" v-show="!list.length">当前购物车没有东西哦，去首页看看吧</h1>
        <div style="margin-bottom: 66px">
            <div style="height: 50px">
                <div :class="{ header: show }">
                    <van-nav-bar
                        title="购物车"
                        left-text="返回"
                        left-arrow
                        @click-left="onClickLeft"
                        class="headerTitle"
                    />
                </div>
            </div>
            <van-card
                style="position: relative"
                v-for="(item, index) in list"
                :key="index"
            >
                <template #desc>
                    <div style="font-size: 16px">{{ item.product_desc }}</div>
                </template>
                <template #price>
                    <div style="font-size: 25px; margin-top: 20px">
                        ￥{{ item.highest_price }}
                    </div>
                </template>
                <template #title>
                    <div style="font-size: 15px; font-weight: bold">
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
            <input
                type="checkbox"
                v-model="allChecked"
                @change="isCheckedAll"
            />全选
        </van-submit-bar>
    </div>
</template>

<script>
import Vue from "vue";
import {
    Toast,
    NavBar,
    Card,
    Image as VanImage,
    Button,
    SubmitBar,
    Checkbox,
} from "vant";
import uri from "@/config/url";

Vue.use(NavBar);
Vue.use(Toast);

Vue.use(Card);
Vue.use(Button);
Vue.use(VanImage);
Vue.use(SubmitBar);
Vue.use(Checkbox);
export default {
    data() {
        return {
            show: true,
            allChecked: false,
            list: [],
            checkArr: [],
            number: 0,
        };
    },
    methods: {
        // 提交订单
        onSubmit() {
            // let num = 0;
            // this.checkArr.forEach((v) => {
            //     console.log(this.list)
            //     this.list.forEach((el) => {
            //         console.log(el.id)
            //         if (v == el.id) {
            //             num += el.sku_num * el.default_price;
            //         }
            //     });
            // });
            // if (num === 0) {
            //     return false;
            // }
        
            // 数量等于0 不提交
            if (this.number == 0) {
                return false;
            }
            //请求 支付二维码
            this.$http
                .post(
                    "https://m.28sjw.com/order/getQR.php",
                    `_s=Qqwsd&_f=${this.number}&_t=2`
                )
                .then((ret) => {
                    // console.log(ret);
                    //返回 的 路径
                    location.href = "http:" + ret.qr_code;
                });
            // this.$store.state.cart.forEach((v, k) => {
            //     if (v.id == id) {
            //         this.$store.state.cart.splice(k, 1);
            //     }
            // });
        },
        // 全选
        isCheckedAll() {
            this.checkArr = [];
            if (this.allChecked) {
                //购物车列表循环
                this.list.forEach((el) => {
                    //单个复选框的  id
                    this.checkArr.push(el.id);
                    console.log(this.checkArr);
                });
            }
        },
        // 单选
        toggleCheck(id) {
            this.allChecked = this.checkArr.length === this.$store.state.cart.length;
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
        onClickLeft() {
            this.$router.go(-1);
        },
    },
    created() {
        if (this.$store.state.cart.length == 0) {
            // document.write(
            //     '<h1 style="text-align:center">当前购物车没有东西哦，去首页看看吧</h1>'
            // );
        }
        this.list = this.$store.state.cart;
        console.log(this.list);
        console.log(this.checkArr);
        this.list.forEach((el) => {
            this.checkArr.push(el.id);
            console.log(this.checkArr);
        });
        let num = 0;
        this.checkArr.forEach((v) => {
            console.log(this.list);
            this.list.forEach((el) => {
                console.log(el.id);
                if (v == el.id) {
                    num += el.sku_num * el.default_price;
                }
            });
        });
        this.number = num;
    },
    computed: {
        total() {
            let num = 0;
            this.checkArr.forEach((v) => {
                this.list.forEach((el) => {
                    if (v == el.id) {
                        num += el.sku_num * el.default_price;
                    }
                });
            });
            this.number = num;
            return num;
        },
    },
    // watch: {
    //     $route: function() {
    //         if (this.$route.path == "/order") {
    //             this.active = 1;
    //         }
    //     },
    // },
};
</script>
<style lang="scss" scpoed>
.headerTitle {
    background-color: pink;
}
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
.bottom {
    margin-bottom: 50px;
}
</style>