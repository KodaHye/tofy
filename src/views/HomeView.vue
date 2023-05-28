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
    <div class="section" v-if="this.userInfo">
      <!--여기에 캐러셀 구현 예정-->
      <div style="margin-right: 50px; margin-left: 50px; width: 85vw;" data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom">
        <h3>당신이 선택한 태그를 선택한 사람들이</h3>
        <h3 style="margin-bottom: 10px;">많이 고른 여행지 입니다.</h3>
        <carousel ref="carousel" :perPage="5" :navigation-enabled="true"
          navigationPrevLabel='<i class="fas fa-angle-left"></i>'
          navigationNextLabel='<i class="fa fa-angle-right" aria-hidden="true"></i>'>
          <slide v-for="card in cards" :key="card.id">
            <!-- 카드 내용을 추가하세요 -->
            <div class="card" style="width: 300px" @click="$router.push({ name: 'attractionDetail', params: { attrno: card.contentId }})">
              <img :src="card.firstImage" alt="카드 이미지" style="width: 100%;"/>
              <p style="font-weight: bold; padding-top: 5px;">{{ card.title }}</p>
              <p>{{ card.addr }}</p>
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
import http from "@/api/http";
import { mapState } from "vuex";
const userStore = "userStore";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      cards: [],
    }
  },
  created() {
    console.log(this.userInfo);

    http.get(`/recommendByTag/${this.userInfo.userNo}`)
    .then(({ data }) => {
      this.cards = data.data.recommendAttr;
      console.log(this.cards)
    })
  },
  mounted() {
  },
  computed: {
		...mapState(userStore, ["userInfo"]),
  },

  methods: {
  }
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
