import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Shop from '@/components/page/shop'
import Goods from '@/components/page/goods'
import Member from '@/components/page/member'
import Set from '@/components/page/set'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { // 收银( 主 )
      path: '/',
      name: 'Pos',
      component: Pos
    },
    { // 店铺
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    { // 商品
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    { // 会员
      path: '/member',
      name: 'Member',
      component: Member
    },
    { // 设置
      path: '/set',
      name: 'Set',
      component: Set
    },
  ]
})
