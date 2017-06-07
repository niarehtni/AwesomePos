<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'

export default {
  name: 'app',
  components:{
    leftNav
  }
}
</script>

<style>
@import './assets/css/global.css';

  .main {
    float: left;
    width: 95%;
    height: 100%;
    background-color: #EFF2F7;
    overflow: hidden;
  }
</style>
