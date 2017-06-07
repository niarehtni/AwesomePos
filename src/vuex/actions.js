import axios from 'axios'

// 常点食物
export const getOftenGoods = ({ commit }) => {
    return new Promise((resolve,reject) => {
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(res=>{
            let data = res.data;
            commit('oftenGoods',data);
            resolve();
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
            resolve();
        })
    })
};

// type 商品
export const getTypeGoods = ({ commit }) => {
    return new Promise((resolve,reject) => {
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(res=>{
            let data = res.data;
            commit('typeGoods',data);
            resolve();
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
            resolve();
        })
    })
}