<template>
  <div id="">
  <!-- <div id="fullpage"> -->
    <!-- 첫번째 Section -->
    <div class="section" style="background-image: url('/main_img/unicorn_1.jpeg'); background-size: 100% 100%;">
      <div class="section-content">
        <span style="font-size: 40pt;">
          Trip only for you
        </span>
      </div>
    </div>

    <!-- 두번째 Section -->
    <div class="section" style="background-image: url('/main_img/unicorn_2.jpeg'); background-size: 100% 100%;">
      <div class="section-content">
        <div>
          <span style="font-size: 28pt;">당신이 가고싶은 여행지를</span>
        </div>
        <div><span style="font-size: 28pt;">골라보세요.</span></div>
        <div style="margin: 10px;"><span style="font-size: 17pt;">여행지 월드컵하러 가기</span></div>
      </div>
    </div>
    <!-- 우리지역 관광지 끝 -->


    <!-- 나만의 여행계획 시작-->
    <div class="section" style="background-image: url('/main_img/unicorn_3.jpeg'); background-size: 100% 100%;">
      <!-- 크기 설정하기, card 캐러셀같이 하거나 -->
      <div class="container" style="margin-top: 120px;">
        <div>
          <span style="font-size: 17pt;">당신과 비슷한 사람들이 선택한 여행지입니다.</span>
        </div>

        <div class="row">
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 나만의 여행계획 끝 -->
      <footer class="p-4 mt-3 container-fluid"
        style="position: absolute; bottom: 0; background-color: rgba(50, 50, 50, 0.1);">
        <nav>
          <a href="#">GitHub</a> |
          <a href="#">Blog</a>
        </nav>
        <p>
          <span>대표 : 김현수, 고다혜</span><br>
          <span>주소 : 대전 유성구 동서대로 98-39</span><br>
          <span>Copyright 2023. ssafy. All Rights Reserved.</span><br>
        </p>
      </footer>
    </div>

  </div>
</template>

<script>

export default {
  mounted() {

  },
};
</script>

<style scoped>
.section {
  margin: 0;
  padding: 0;
}

.section-content {
  position: relative;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
}

.main-footer {
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
}

.init_screen {
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}</style>