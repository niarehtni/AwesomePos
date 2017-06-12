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
                    <router-link tag="span" class="foodDetails" 
                    :to="{ name: 'FoodDetails', params: { foodImg: goods.goodsImg, foodName:goods.goodsName }}" >详情</router-link>
                    <a href="javascript:void(0)" class="foodBuy" v-on:click="addOrderList()">
                        购买
                        <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                    </a>
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
                    <a href="javascript:void(0)" class="foodBuy">
                        购买
                        <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                    </a>
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
                    <a href="javascript:void(0)" class="foodBuy">
                        购买
                        <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                    </a>
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
                    <a href="javascript:void(0)" class="foodBuy">
                        购买
                        <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                    </a>
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
            type3Goods:[]
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

<style lang="scss">
  .cookList li{
       list-style: none;
       width:246px;
       height: 110px;
       border:1px solid #E5E9F2;
       overflow: hidden;
       background-color:#fff;
       padding: 4px;
       float:left;
       margin: 2px;
       &:hover { border:1px solid #1D8CE0; }

       .foodImg{
           float:left;
           width: 110px;
           height: 110px;
       }
       .foodName, .foodPrice {
            display: block;
       }
       .foodName{
           font-size: 18px;
           color:brown;
       }
       .foodPrice{
           font-size: 16px;
           padding-top:10px;
           color:#5887FF;
       }
       .foodDetails {
            cursor: pointer;
            margin-top:6px;
            color:#666;
       }
       .foodBuy {
            display: inline-block;
            width: 80px;
            height: 36px;
            line-height: 36px;
            background-color: #5887FF;
            color:#fff;
            border-radius: 4px;
            text-align: center;
            float:right;
            margin:20px 4px 0 0;
            &:hover{
                background-color: #8ba8f1;
            };

       }
 
   }
</style>
