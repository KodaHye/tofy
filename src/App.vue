<template>
  <div id="app">
    <!--header-->
    <the-header></the-header>
    <div class="section">
      <router-view class="router-view"></router-view>
    </div>
    <!--footer-->
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from "@/components/common/header"
import TheFooter from '@/components/common/TheFooter.vue';
export default {
  components: {
    TheHeader, TheFooter
  }
}
</script>
<style>


  .router-view {
    background-image: url('/public/unicorn.jpeg');
    /* background-image: url('/src/assets/img/background.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
