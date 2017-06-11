<template>
    <div class="main-right">
        <h1>店铺模块：功能暂未开放，敬请期待!2</h1>
        <router-link tag="p" :to="{ path:'sm' }">跳转至shopModule</router-link>
        <router-view class="child-shop"></router-view>
    </div>
</template>

<script>
export default {
    name:'shop'
}
</script>

<style scoped>
	.child-shop{ 
		padding: 10px;
		border:1px solid #666;
	}
</style>

