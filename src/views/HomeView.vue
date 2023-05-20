<template>
  <div id="fullpage">
    <div class="section section1" style="background-image: url('/main_img/unicorn_1.jpeg'); background-size: 100% 100%;">
      <!-- <h1>trip only for you</h1> -->
      <div>
        <span style="font-size: 40pt;">
          Trip only for you
        </span>
      </div>

    </div>
    <div class="section section2" style="background-image: url('/main_img/unicorn_2.jpeg'); background-size: 100% 100%;">
      <div>
        <div>
          <span style="font-size: 25pt;">당신이 가고싶은 여행지를</span>
        </div>
        <div><span style="font-size: 25pt;">골라보세요.</span></div>
      </div>
    </div>
    <div class="section section3" style="background-image: url('/main_img/unicorn_3.jpeg'); background-size: 100% 100%;">
      <h1>세 번째 섹션</h1>
      <p>더 많은 내용을 추가하세요.</p>
      
      <div class = "footer" style="text-align: left;">
        <nav>
            <a href="#">GitHub</a> |
            <a href="#">Blog</a>
        </nav>
        <p>
            <span>대표 : 김현수, 고다혜</span><br>
            <span>주소 : 대전 유성구 동서대로 98-39</span><br>
            <span>Copyright 2023. ssafy. All Rights Reserved.</span><br>
        </p>
        </div>
    </div>
  </div>
</template>

<script>
import fullpage from 'fullpage.js';

export default {
  mounted() {
    new fullpage('#fullpage', {
      // fullPage.js 옵션 설정
    });
  },
};
</script>

<style scoped>
#fullpage {
  height: 100vh;
}

.section {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  z-index: 100000000;
}
</style>