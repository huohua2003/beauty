<template>
    <div>
        <div>您的余额为：10000000000000元</div>
    </div>
</template>


<script>
export default {
     // vuex 底部导航展示和隐藏
  created() {
    this.$store.commit("isShowFooter", false);
  },
  beforeDestroy() {
    this.$store.commit("isShowFooter", true);
  },
}
</script>