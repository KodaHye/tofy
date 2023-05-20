<template>
  <div id="fullpage">
    <div class="section section1" style="background-image: url('/main_img/unicorn_1.jpeg'); background-size: 100% 100%;">
      <!-- <h1>trip only for you</h1> -->
      <div class = "init_screen">
        <span style="font-size: 40pt;">
          Trip only for you
        </span>
      </div>

    </div>
    <div class="section section2" style="background-image: url('/main_img/unicorn_2.jpeg'); background-size: 100% 100%;">
      <div>
        <div>
          <span style="font-size: 28pt;">당신이 가고싶은 여행지를</span>
        </div>
        <div><span style="font-size: 28pt;">골라보세요.</span></div>
        <div style="margin: 10px;"><span style="font-size: 17pt;">여행지 월드컵하러 가기</span></div>
      </div>
    </div>
    <div class="section section3" style="background-image: url('/main_img/unicorn_3.jpeg'); background-size: 100% 100%;">
      <div>
        <span style="font-size: 17pt;">당신과 비슷한 사람들이 선택한 여행지입니다.</span>
      </div>

      <div class="row">
        <div>
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div>
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div>
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>

      </div>


      <div class="footer" style="text-align: left;">
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

.init_screen{
	animation: fadein 2s;
}

@keyframes fadein {
	from { opacity: 0; }
	to { opacity: 1; }
}
</style>