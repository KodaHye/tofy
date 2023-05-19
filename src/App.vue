<template>
  <div id="app">
    <!--header-->
    <the-header></the-header>
    <div style="background-color: ">
      <router-view></router-view>
    </div>

    <!--footer-->
  </div>
</template>

<script>
import TheHeader from "@/components/common/header"
export default {
  components: {
    TheHeader,
  }
}
</script>
<style>

</style>
