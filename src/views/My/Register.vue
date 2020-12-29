<template>
  <div>
    <!--头部 -->
    <div>
      <van-nav-bar title="欢迎注册" left-arrow @click-left="onClickLeft" />
    </div>
    <!--  -->
    <div class="form-vant">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="mobile"
          name="mobile"
          label="手机号"
          placeholder="填写可用的手机号"
          :rules="[{ required: true, pattern, message: '请填写可用的手机号' }]"
        />
        <van-field
          v-model="gender"
          name="性别"
          label="性别"
          placeholder="请输入性别"
          :rules="[{ required: true, message: '请输入性别' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入表单组件：
import Vue from "vue";
import { Form, NavBar, Toast } from "vant";
Vue.use(Form);
Vue.use(NavBar);
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
      username: "",
      password: "",
      mobile: "",
      gender: "",
      pattern: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
    onSubmit(values) {
    //   console.log(values);
      this.$http
        .post(
          "https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/userIfo"
        )
        .then((ret) => {
        //   console.log(ret.usersIfo);
          ret.usersIfo.forEach((item, index) => {
            // console.log(item.mobile);
            if (!(item.mobile == values.mobile)) {
              Toast.success("注册成功，即将跳转到登录页面");
              setTimeout(() => {
                this.$router.push("/login");
              }, 2000);
            } else {
              Toast.fail('手机号已被注册');
            }
          });
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.form-vant {
  margin-top: 130px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>