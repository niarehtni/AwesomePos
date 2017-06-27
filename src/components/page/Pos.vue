<template>
  <div class="pos">
      <el-row>
        <el-col :span='8' class="pos-order" id="OrderList">
            <el-tabs>
              <el-tab-pane label="点餐">
                <el-table :data="tableData" border style="width:100%;">
                  <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                  <el-table-column prop="count" label="量" width="60"></el-table-column>
                  <el-table-column prop="price" label="金额" width="70"></el-table-column>
                  <el-table-column  label="操作" width="100" fixed="right">
                    <template scope="scope">
                      <el-button type="text" size="small" @click="deleteOrderList(scope.row)">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="total">
                  <small>数量：</small><span class="span">{{ totalCount }}</span>
                  <small>金额：</small><span class="span">{{ totalMoney }}</span>
                </div>
                <div class="btns">
                  <el-button type="warnning">挂单</el-button>
                  <el-button type="danger" @click="deleteAllOrder()">清空</el-button>
                  <el-button type="success" @click="checkout()">结账</el-button>
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
        <el-col :span='16'>
          <!-- 上 -->
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-gooos-list">
              <!-- 筛选 -->
              <p class="filter-price">
                <span>价格筛选</span>
                <a v-for="item in filterData" class="filter-price_btn" href="javascript:void(0)">
                  <el-button :plain="true" @click="filterPrice(item.status)">{{ item.txt }}</el-button>
                </a>
              </p>
              <ul class="cookList clearfix">
                <li v-for="goods in oftenGoods">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                    <a href="javascript:void(0)" class="foodBuy"  v-on:click="addOrderList(goods)">购买<i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                    </a>
                </li>
                </ul>
            </div>
          </div>
          <!-- 下 -->
          <type-goods :data="typeGoods" @addOL="addOrderList"></type-goods>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapSate,mapMutations } from 'vuex'
import store from '../../vuex/store'
import typeGoods from './typeGoods'

export default {
  name: 'pos',
  components:{
    typeGoods,
  },
  data(){
    return {
      tableData:[], // 点餐食品
      oftenGoods:[], // 常见商品
      typeGoods:[],
      filterData:[ //筛选价格
        {
          txt:'全部',
          status:'10'
        },
        {
          txt:'0-15元',
          status:'0'
        },
        {
          txt:'15-30元',
          status:'1'
        },
        {
          txt:'30元以上',
          status:'2'
        },
      ],
      totalCount:0, // 总数量
      totalMoney:0, // 总价格
    }
  },
  computed:{
    
  },
  created:function() {
    // 加载常用goods
    this.$store.dispatch('getOftenGoods').then(()=>{
      this.oftenGoods = this.$store.state.oGoods
    });
    // 分类goods
    this.$store.dispatch('getTypeGoods').then(()=>{
      this.typeGoods = this.$store.state.tGoods;
    });

  },
  mounted:function() {
    var orderHeight = document.body.clientHeight;
    document.getElementById('OrderList').style.height = orderHeight + "px";
  },
  methods:{
    // 弹框 
    uiAlert(tipMsg,tipTitle,yesBtnText,noBtnText,tipType,mesMsg,mesType,mesTimer,sucFun){
        this.$confirm(tipMsg, tipTitle, {
          confirmButtonText: yesBtnText,
          cancelButtonText: noBtnText,
          type: tipType
        }).then(() => {
          this.mes(mesMsg,mesType,mesTimer);
          sucFun();
        }).catch(()=>{

        });
    },
    // 提示
    mes(msg,type,timer){
      this.$message({
            message: msg,
            type: type,
            duration:timer
        });
    },
    // 订单增加
    addOrderList(goods){
      console.log(goods);
      // 商品是否已经存在于订单列表
      let isHave = false;
      for(let i=0; i<this.tableData.length;i++) {
        if(this.tableData[i].goodsId == goods.goodsId)
          isHave = true;
      }

      // 存在给弹框提示、不存在直接添加
      if(isHave) {
        let arr = this.tableData.filter( o=> o.goodsId==goods.goodsId );
        arr[0].count++;
      }else {
        let newsGood = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        }
        this.tableData.push(newsGood);
        this.mes('添加成功','success',500);
      }

      this.getAllMoney();      
    },
    // 删除单个订单
    deleteOrderList(goods) {
      this.tableData = this.tableData.filter( o=>o.goodsId != goods.goodsId );
      this.mes("删除成功","success",500);
      this.getAllMoney();
    },
    // 删除全部订单
    deleteAllOrder(){
      if(this.totalCount == 0){
        this.mes("账单为空，删除失败","error",1000);
      }else{
        this.tableData=[],
        this.totalCount=0;
        this.totalMoney=0;
        this.mes("删除成功","success",500);
      }
    },
    // 计算总数量、总金额
    getAllMoney(){
      this.totalCount = 0;
      this.totalMoney = 0;
      if(this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney+(element.count * element.price);
        });
      }
    },
    // 结账
    checkout(){
      if(this.totalCount == 0) {
        this.mes("账单为空，结账失败","error",3000);
      }else {
        this.tableData=[],
        this.totalCount=0;
        this.totalMoney=0;
        this.mes("结账成功，正在打印账单.....","success",3000);
      }
    },
    // 筛选常用商品
    filterPrice(status){
      switch(status)
      {
        case "10":
          this.filter(1,0);
          break;
        case "0":
          this.filter(0,15);
          break;
        case "1":
          this.filter(15,30);
          break; 
        default:
          this.filter(30,30);  
      }
      this.$message({
          message: '筛选成功',
          type: 'success',
          duration:1000
      });
    },
    filter(min,max){
      var _thisData = this.$store.state.oGoods;
      this.oftenGoods = [];
      if(min<max){ // 执行区间
        for(var i=0;i<_thisData.length;i++){
          if(_thisData[i].price>min && _thisData[i].price<=max){
            this.oftenGoods.push(_thisData[i]);
          }
        }
      }else if(min=max){ // 执行大于
        for(var i=0;i<_thisData.length;i++) {
          if(_thisData[i].price>min) {
            this.oftenGoods.push(_thisData[i]);
          }
        }
      }else{
        this.oftenGoods = this.$store.state.oGoods
      }
    },
  },
  store

}
</script>

<style lang="scss" scoped>
  .pos-order {
    height: 100%;
    background-color: #F9FAFC;
    border-right:1px solid #C0CCDA;

    .total {
      padding: 10px;
      border-bottom:1px solid #D3dce6;
      background: #fff;
      text-align: center;

      .span{
        color:#000;
        font-weight:bold;
        margin-right: 6px;
      }
    }
  }
  .often-gooos-list ul{
    height: 280px;
    overflow-y: scroll;
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
  .filter-price {
    padding: 16px;
      .filter-price_btn {
        margin: 0 4px;
      }
  }
  .goods-type {
    clear: both;
  }
</style>
