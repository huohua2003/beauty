<template>
    <div>
        
    </div>
</template>

<script>
import uri from '@/config/url'
export default {
    data(){
        return {
            list:{}
        }
    },
    created(){
        this.$http.get(uri.getFond+`?id=${this.$route.params.id}`).then(ret=>{
            console.log(ret);
             this.list=ret.data.productList
             console.log(this.list);
        })
    },
}
</script>