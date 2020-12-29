<template>
    <div>
        <van-search
            v-model="value"
            shape="round"
            background=" #faafaa"
            placeholder="请输入搜索关键词"
        />
    </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";

Vue.use(Search);
export default {
    data() {
        return {
            value: "",
        };
    },
};
</script>
<style lang="scss">
   
</style>
