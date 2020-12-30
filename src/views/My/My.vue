<template>
  <div class="center-view">
    <div
      class="avatar"
      data-enter-time="1608645908"
      data-click-fun="track_f_737069"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
        class="avator-icon"
        v-if="!userIfo.headIcon"
      
      />
       <img :src="userIfo.headIcon" v-if="userIfo.headIcon"    class="avator-icon"/>
      <div class="nick-name" v-if="!userIfo.mobile" @click="login">
<<<<<<< HEAD
        立即登录 /
      </div>
       <div class="nick-name" v-if="!userIfo.mobile"  @click="register" >
        立即注册
=======
        立即登录
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
      </div>
      <div class="nick-name" v-if="userIfo.mobile">
        {{ userIfo.mobile | userIfoFilter }}
      </div>
    </div>

    <!-- 列表 -->
    <div class="list">
      <div
        class="margin-set"
        data-enter-time="1608645908"
        data-click-fun="track_f_299313"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
          width="20px"
          height="20px"
          alt=""
        />
        <span class="label" @click="Discounts">优惠券</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
          alt=""
          class="arrow"
        />
      </div>
      <!--  -->
      <div
        class="margin-set"
        data-enter-time="1608645908"
        data-click-fun="track_f_433177"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
          width="20px"
          height="20px"
          alt=""
        />
        <span class="label" @click="Address">常用地址</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
          alt=""
          class="arrow"
        />
      </div>
      <!--  -->
      <div
        class="margin-set"
        data-enter-time="1608645908"
        data-click-fun="track_f_433177"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
          width="20px"
          height="20px"
          alt=""
        />
        <span class="label" @click="Balance">可用余额</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
          alt=""
          class="arrow"
        />
      </div>
      <!--  -->
      <div
        class="margin-set"
        data-enter-time="1608645908"
        data-click-fun="track_f_433177"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
          width="20px"
          height="20px"
          alt=""
        />
        <span class="label" @click="Advice">意见反馈</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
          alt=""
          class="arrow"
        />
      </div>
      <!--  -->
      <div
        class="margin-set my-card"
        data-enter-time="1608645908"
        data-click-fun="track_f_433177"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
          width="20px"
          height="20px"
          alt=""
        />
        <span class="label" @click="SetUp">设置  </span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
          alt=""
          class="arrow"
        />
      </div>
    </div>
    <!--  -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      userIfo: {},
    };
  },
  methods: {
    login() {
      // 编程式导航：
      this.$router.push("/login");
    },
    SetUp(){
      this.$router.push("/setup");
    },
    Discounts(){
      this.$router.push("/discounts");
    },
    Advice(){
      this.$router.push("/advice");
    },
    Balance(){
      this.$router.push("/balance");
    },
    Address(){
      this.$router.push("/address");
<<<<<<< HEAD
    },
    register(){
      this.$router.push("/register");
=======
>>>>>>> d343bdcb4d74f707cd9528d198064c8c1414b13f
    }
  },
  created() {
    //刚进页面要判断一下是否登录：vuex里边是否有jwt：
    let jwt = this.$store.state.jwt;
    if (jwt) {
      // 已经登录：发送请求获取用户信息渲染页面
      this.$http
        .post(
          "https://www.fastmock.site/mock/609eee78b06003f3fc8701aef257a08b/v1/beauty/usersIfo"
        )
        .then((ret) => {
        //   console.log(ret);
          this.userIfo = ret;
        });
    }
  },
  filters: {
    userIfoFilter:(val)=>{
    //   console.log(val.toString())
     return val.toString().replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    },
  },
};
</script>

<style lang="scss" scope>
.center-view {
  background: rgb(236, 235, 235);
}
.center-view .avatar {
  text-align: center;
  margin-top: -44px;
  height: 135px;
  padding-left: 22px;
  padding-top: 64px;
  background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2457504328,3017265667&fm=26&gp=0.jpg);
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
}
.center-view .avatar .avator-icon {
  width: 63px;
  height: 63px;
  border-radius: 35px;
  margin-right: 20px;
  border: 2px solid #fff;
}
.center-view .avatar .nick-name {
  font-size: 16px;
}
.center-view .margin-set {
  background: #fff;
  padding: 0 15px;
  width: 345px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.center-view .my-card {
  margin-top: 10px;
}
.center-view .margin-set .label {
  margin-left: 15px;
  color: #191a1b;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.center-view .margin-set .arrow {
  text-align: right;
  width: 15px;
  height: 15px;
}
</style>