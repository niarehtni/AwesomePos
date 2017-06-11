<template>
    <div>
        <h1>路由获取参数{{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name:'shopModule',
    data(){
    	return{
    		msg:'',
    	}
    },
    mounted:function() {
    	this.msg = this.$route.params.id;
    },
}
</script>

<style>
</style>

