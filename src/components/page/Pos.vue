<template>
  <div class="pos">
      <el-row>
        <el-col :span='7' class="pos-order" id="OrderList">
            <el-tabs>
              <el-tab-pane label="点餐">
                <el-table :data="tableData" border style="width:100%;">
                  <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                  <el-table-column prop="count" label="量" width="50"></el-table-column>
                  <el-table-column prop="price" label="金额" width="70"></el-table-column>
                  <el-table-column  label="操作" width="100" fixed="right">
                    <template scope="scope">
                      <el-button type="text" size="small">删除</el-button>
                      <el-button type="text" size="small">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="btns">
                  <el-button type="warnning">挂单</el-button>
                  <el-button type="danger">删除</el-button>
                  <el-button type="success">结账</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">
                挂单
              </el-tab-pane>
              <el-tab-pane label="外卖">
                外卖
              </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span='17'>
          <!-- 上 -->
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-gooos-list">
              <ul>
                <li v-for="items in oftenGoods">
                  <span>{{items.goodsName}}</span>
                  <span class="o-price">¥{{items.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 下 -->
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li v-for="goods in type0Goods">
                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                        <span class="foodName">{{goods.goodsName}}</span>
                        <span class="foodPrice">￥{{goods.price}}元</span>
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
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapSate,mapMutations } from 'vuex'
import store from '../../vuex/store'

export default {
  name: 'pos',
  data(){
    return {
      tableData:[
        { goodsName: '可口可乐',price: 8,count:1 },
        { goodsName: '香辣鸡腿堡',price: 15,count:1 },
        { goodsName: '爱心薯条',price: 8,count:1 },
        { goodsName: '甜筒',price: 8,count:1 }
      ],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
    }
  },
  computed:{
  },
  mounted:function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById('OrderList').style.height = orderHeight + "px";

    // 加载常用goods
    this.$store.dispatch('getOftenGoods').then(()=>{
      this.oftenGoods = this.$store.state.oGoods
    });
    // 分类goods
    this.$store.dispatch('getTypeGoods').then(()=>{
      var typeGoods = this.$store.state.tGoods;
      this.type0Goods = typeGoods[0];
      this.type1Goods = typeGoods[1];
      this.type2Goods = typeGoods[2];
      this.type3Goods = typeGoods[3];
    });

  },
  methods:{
  },
  store

}
</script>

<style scoped lang="scss">
  .pos-order {
    height: 100%;
    background-color: #F9FAFC;
    border-right:1px solid #C0CCDA;
  }
  .btns {
    margin-top: 20px;
    text-align: center;
  }
  .title {
    height: 20px;
    border-bottom:1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
  }
  .often-gooos-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding: 10px;
    margin:10px;
    background-color: #fff;
    cursor: pointer;

    &:hover { border:1px solid #1D8CE0; }
    .o-price {
      color: #5887FF;
    }
  }
  .goods-type {
    clear: both;
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
