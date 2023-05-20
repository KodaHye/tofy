<template>
  <div id="app">
    <nav>
      <the-header></the-header>
      <div class="section">
        <router-view class="router-view"></router-view>
      </div>
      <the-footer v-if="$route.name !== 'home'"></the-footer>
    </nav>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue"
import TheFooter from "@/components/common/TheFooter.vue"

export default {components: {TheHeader, TheFooter}}
</script>
<style scoped>
  /* @import '@/assets/css/index.css'; */
  /* @import '@/assets/css/app.css'; */

  .router-view {
    background-image: url('/public/unicorn.jpeg');
    /* background-image: url('/src/assets/img/background.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
