<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <transition name="fade" mode="out-in"> 
        <router-view></router-view>
      </transition> 
    </div>
  </div>
</template>

<script>
import './assets/js/$.js'
import leftNav from '@/components/common/leftNav'

export default {
  name: 'app',
  components:{
    leftNav
  },
  methods:{  
  },
}
</script>

<style lang="scss">
@import './assets/css/global.css';
  $Suc:#13CE66; 

  .main {
    float: left;
    width: 95%;
    height: 100%;
    background-color: #EFF2F7;
    overflow: hidden;
  }
  .main-right {
     padding:10px; 
  }
  .fade-enter { 
    opacity: 0;
  }
  .fade-enter-active { 
    transition:opacity .3s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity:0;
    transition: opacity .3s;
  }
</style>
