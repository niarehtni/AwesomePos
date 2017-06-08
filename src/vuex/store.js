/**
 * created by cdt on 2017/6/7
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    oGoods:[],//常点食物
    tGoods:[],//食物分类
}

const mutations = {
    oftenGoods(state,obj) { //常点食物
        state.oGoods = obj;
    },
    typeGoods(state,obj){ //食物分类
        state.tGoods = obj;
    }

}


export default new Vuex.Store({
    state,
    mutations,
    actions
})