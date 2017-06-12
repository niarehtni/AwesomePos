<template>
    <div class="food-details">
        <h1>{{ $route.params.foodName }}</h1>
        <img :src="$route.params.foodImg" alt="图片">
        <p>食物介绍：</p>
        <p></p>
        <button @click="goBack()">返回上一页</button>
        <button @click="goHome()">首页</button>
    </div>
</template>

<script>
export default {
    name:'foodDetails',
    data(){
        return{
            
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
    }
}
</script>

<style lang="scss" scoped>
    .food-details {
        margin:100px auto;
        width: 500px;
        text-align:center;
        padding: 20px;

        img {
            display: inline-block;
            width: 400px;
            height: 400px;
            margin: 20px 0px;
        }
        p {
            text-align:left;
            margin-bottom: 20px;
        }
        a {
            margin: 10px;
        }
    }
</style>

