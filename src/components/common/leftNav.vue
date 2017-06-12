<template>
  <div class="left-nav">
        <ul>
            <router-link tag="li" :to="{ path:'/' }" >
                <i class="icon iconfont icon-goumai"></i>
                <div>收银</div>
            </router-link>
            <router-link tag="li" :to="{ path:'/shop' }">
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </router-link>
            <router-link tag="li" :to="{ path:'/goods' }">
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
            </router-link>
            <router-link tag="li" :to="{ path:'/member' }">
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </router-link>
            <router-link tag="li" :to="{ path:'/set' }">
                <i class="icon iconfont icon-gongnengjianyi"></i>
                <div>统计</div>
            </router-link>
        </ul>
  </div>
</template>

<script>
export default {
  name:'leftNav',
}
</script>

<style lang="scss">
    .left-nav {
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1D8CE0;
        float: left;
        width: 5%;

        ul {
            padding: 0px;
            margin: 0px;

            li {
                list-style: none;
                text-align:center;
                border-bottom:1px solid #20a0ff;
                padding: 10px;
                cursor: pointer;

                &:hover {
                    background:#5d96c1;
                }
            }
            .router-link-exact-active.router-link-active{
                background:#5d96c1;
            }
        }

        .iconfont {
            font-size:24px;
        }
    }
</style>


