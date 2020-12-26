<template>
  <div id="app">
    <Footer/>
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
#app {
 
 
}
</style>
