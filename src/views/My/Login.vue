<template>
  <div class="login">
    <div class="img">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2015%2F08%2F06%2FFpzKO0AP8vWkdBVnAy9w6EAFSoSY.jpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611470131&t=b663e6c9a432bfa6077aa87a39006592"
        alt=""
      />
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="mobile"
          name="mobile"
          label="手机号"
          placeholder="手机号"
          :rules="[{ pattern, message: '请填写正确的手机号' }]"
        />
        <van-field
          v-model="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            style="background: pink; border: 0px"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入vant组件
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
  // vuex 底部导航展示和隐藏
  created() {
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy() {
    this.$store.commit("isShowFooter", true);
  },

  data() {
    return {
      mobile: "",
      password: "",
      pattern: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
    // values是表单的数据：
    onSubmit(values) {
      console.log( values);
      // 请求用户信息回来：
      this.$http.post("https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/beauty/usersIfo").then((ret) => {
        // console.log(ret);
        if (ret.mobile == values.mobile && ret.password ==  values.password) {
          Toast.success(ret.msg1);
          this.$store.commit("setjwt", ret.jwt);
          setTimeout(() => {
            this.$router.push('/my');
          },2000);
        } else {
          Toast.fail(ret.msg2); 
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  .img {
    width: 190px;
    height: 88px;
    margin: 100px auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>