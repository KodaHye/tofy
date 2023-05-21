<template>
    <div class="box">
        <div class="square">
            <b-row>
                <!--제목-->
                <b-col align-self="center" style="text-align: center; font-size: 30px;">태그 선택</b-col>
                <div class="w-100" style="height: 30px;"></div>
                <!--설명-->
                <b-col>원하는 여행 유형을 선택해주세요 !! 🛫 (최대 5개 선택 가능)</b-col>
                <div class="w-100" style="height: 30px;"></div>
                <!--태그-->
                <tag-items/>
                <div class="w-100" style="height: 40px;"></div>
                <!--가입 버튼-->
                <b-col align-self="center" style="text-align: center;"><a href="#" class="join-btn">회원가입</a></b-col>
            </b-row>
        </div>
    </div>
</template>
  
  <script>
import TagItems from '@/components/tag/TagItems.vue';
  export default {
    name: 'JoinSelectTag',
    components: {TagItems},
    data() {
      return {
      };
    },
  };
  </script>
  
  <style>
  .square {
    min-height: 70vh;
    flex-grow: 1;
    margin: 0 auto;
    padding: 30px 18px 43px;
    border-radius: 20px;
    background-color: #fff;
    max-width: 60vw;
    }

  .join-btn {
    font-size: 20px; 
    text-align: center;
    color: black;
  }

  .join-btn:hover {
    color: black;
    text-decoration: none;
    border-top: solid;
    transition: 0.1s ease;
  }
  </style>