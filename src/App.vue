<template>
  <div id="app">
    <Footer v-show="this.$store.state.isShowFooter"/>
    <router-view></router-view>

  </div>
</template>
<script>
import Footer from '@/components/Footer/FooterNav'
export default {
  
  components:{
    Footer
  }
}
</script>

<style lang="scss">
</style>
