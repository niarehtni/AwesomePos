<template>
    <div class="goods-type">
        <el-tabs>
            <el-tab-pane label="汉堡">
            <div>
                <ul class="cookList">
                <li v-for="goods in type0Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                    <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                </li>
                </ul>
            </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
            <div>
                <ul class="cookList">
                <li v-for="goods in type1Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
                </ul>
            </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
            <div>
                <ul class="cookList">
                <li v-for="goods in type2Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
                </ul>
            </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
            <div>
                <ul class="cookList">
                <li v-for="goods in type3Goods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
                </ul>
            </div>
            </el-tab-pane>
        </el-tabs>
        </div>
</template>

<script>
export default {
    name:'typeGoods',
    props:['data'],
    data(){
        return{
            type0Goods:[],  // 分类商品
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
        }
    },
    created:function(){
        this.$watch('data', function(newVal, oldVal){
            this.type0Goods =newVal[0];
            this.type1Goods =newVal[1];
            this.type2Goods =newVal[2];
            this.type3Goods =newVal[3];
        });
    },
}
</script>

<style scoped>
    
</style>
