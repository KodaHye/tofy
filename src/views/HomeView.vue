<template>
  <div class="box">
    <!--타이틀 start-->
    <div class="section">
      <div class="title" data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
        <h1>Trip only for you</h1>
      </div>
    </div>
    <!--타이틀 end-->
    <!--월드컵 하러가기 문구 start-->
    <div class="section">
      <div class="title" data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
        <h1>당신이 가고싶은 여행지를 골라보세요.</h1>
        <a href="#" @click="$router.push('/worldcup')">여행 하러가기</a>
      </div>
    </div>
    <!--월드컵 하러가기 문구 end-->
    <!--로그인 시 사용자 기반 추천 여행지 보이기 start-->
    <div class="section">
      <!--여기에 캐러셀 구현 예정-->
      
    </div>
    <!--로그인 시 사용자 추천 여행지 보이기 start-->
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    // Carousel,
    // Slide,
  },
  created() {


  },
  mounted() {
  },
};
</script>

<style scoped>
.section {
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
}

.title>* {
  color: black;
}

.title>a {
  font-size: 20px®;
}

.title>a:hover {
  text-decoration: none;
  animation: change-color 0.3s forwards;
}

@keyframes change-color {
  0% {
    color: black;
  }

  25% {
    color: rgb(35, 35, 35);
  }

  50% {
    color: rgb(87, 86, 86);
  }

  75% {
    color: rgb(103, 103, 103);
  }

  100% {
    color: rgb(106, 106, 106);
  }
}
</style>