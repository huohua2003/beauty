<template>
    <div class="container">
        <HeaderSearch />
        <Loop/>
        <Main/> 
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>

import HeaderSearch from "@/components/Header/HeaderSearch";
import Loop from "@/components/Main/Loop"
import Main from "@/components/Main/Main"
export default {
    components: {
        HeaderSearch,
        Loop,
        Main,
    },
};
</script>
<style lang="scss" scoped>
.container {
    background-color: pink;
    height: 100%;
}
</style>
