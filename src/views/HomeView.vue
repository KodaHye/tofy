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
      <div style="margin-right: 50px; margin-left: 50px;" data-aos="fade-up">
        <carousel ref="carousel" :perPage="5" :navigation-enabled="true"
          navigationPrevLabel='<i class="fas fa-angle-left"></i>'
          navigationNextLabel='<i class="fa fa-angle-right" aria-hidden="true"></i>'>
          <slide v-for="card in cards" :key="card.id">
            <!-- 카드 내용을 추가하세요 -->
            <div class="card">
              <img :src="card.image" alt="카드 이미지" />
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <!--로그인 시 사용자 추천 여행지 보이기 start-->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        {
          id: 2,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        {
          id: 3,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        {
          id: 4,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        {
          id: 5,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        {
          id: 6,
          image: '이미지 URL',
          title: '여행지 이름',
          description: '간단한 여행지 설명',
        },
        // 다른 카드들도 추가하세요
      ],
    }
  },
  created() {


  },
  mounted() {
  },
};
</script>

<style>
.VueCarousel-pagination {
  display: none !important;
}

.VueCarousel-navigation-button {
  font-weight: bolder !important;
  padding-top: 0px !important;
  height: 50px !important;
  font-size: 25pt !important;
  color: gray !important;
  opacity: 25% !important;
}
</style>

<style scoped>
.card {
  /* 카드 스타일을 설정하세요 */
  margin: 5px;
  padding: 10px;
}

.card>p {
  margin: 0px;
}

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