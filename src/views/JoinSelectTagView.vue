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
        <b-col align-self="center" style="text-align: center;">
          <button class="tag-submit-btn" @click="submitTags()" value="등록">
            태그 등록
          </button>
        </b-col>
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

      //선택된 태그가 0개라면 등록 안됨
      if (this.tags.length == 0) {
        alert("태그는 1개 이상 선택해야 합니다.");
      } else {
        //선택된 태그를 DB에 저장
        saveSelectedTags(
          this.tags,
          res => {
            if (res.data.status === 'success') {
              console.log("유저가 선택한 태그 정보 저장 완료");
              alert("태그 정보가 입력되었습니다 !!!");
              this.$router.push({ name: 'worldcup' });
            } else {
              console.log("유저가 선택한 태그 정보 저장 실패");
            }
          },
          err => {
            console.log("태그정보 저장 중 에러", err);
          }
        )
      }

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

.tag-submit-btn {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.tag-submit-btn:hover {
  background: #F6F9FE;
  color: #174ea6;
}

.tag-submit-btn:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.tag-submit-btn:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.tag-submit-btn:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.tag-submit-btn:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}

.tag-submit-btn:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}

.tag-submit-btn:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}

.tag-submit-btn:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
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