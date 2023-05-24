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
        <tag-items @selectTag="receiveTag" />
        <div class="w-100" style="height: 40px;"></div>
        <!--가입 버튼-->
        <b-col align-self="center" style="text-align: center;"><a href="#" class="join-btn"
            @click="submitTags()">등록</a></b-col>
      </b-row>
    </div>
  </div>
</template>
  
<script>
import TagItems from '@/components/tag/TagItems';
import { saveSelectedTags } from '@/api/tag';
import { mapState, mapGetters } from "vuex";

const userStore = "userStore";

export default {
  name: 'JoinSelectTag',
  components: { TagItems },
  data() {
    return {
      tags: []
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
    ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    async submitTags() {

      console.log("전송될 태그", this.tags);

      //선택된 태그를 DB에 저장
      saveSelectedTags(
        this.tags,
        res => {
          if (res.data.status === 'success') {
            console.log("유저가 선택한 태그 정보 저장 완료");
            alert("태그 정보가 입력되었습니다 !!!");
            this.$router.push({ name: 'home' });
          } else {
            console.log("유저가 선택한 태그 정보 저장 실패");
          }
        },
        err => {
          console.log("태그정보 저장 중 에러", err);
        }
      )
    },

    receiveTag(tag) {
      console.log("현재 선택한 태그", tag);
      console.log("현재 선택된 태그 배열", this.tags);
      const test = this.tags.filter(t => t.tagNo !== tag.tagNo);
      console.log("중복된 태그만 제거된 태그 배열", test);
      console.log("현재 배열에 들어온 태그와 중복되는 태그가 있는가?", this.tags.some(t => t.tagNo === tag.tagNo));

      if (this.tags.some(t => t.tagNo === tag.tagNo)) {
        console.log("이미 선택된 태그");
        //이미 선택했던 것은 지워야함.
        this.tags = this.tags.filter(t => t.tagNo !== tag.tagNo);
      } else {
        console.log("새로운 태그");
        this.tags.push({
          userNo: this.userInfo.userNo,
          tagNo: tag.tagNo
        });
      }

      console.log("현재 선택된 태그 개수 = " + this.tags.length);
    }
  }
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
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: both;
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>