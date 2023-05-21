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
                <b-col align-self="center" style="align-items: center;">
                    <b-row style="align-items: center;" v-for="(row, rowIndex) in groupedTags" :key="rowIndex" class="tag-row">
                      <b-col v-for="(tag, index) in row" :key="index" style="text-align: center;">
                        <button
                          :class="{ 'tag-selected': selectedTags.includes(tag) }"
                          @click="selectTag(tag)"
                          class="tag-button"
                        >
                          {{ tag }}
                        </button>
                      </b-col>
                    </b-row>
                </b-col>
                <div class="w-100" style="height: 40px;"></div>
                <!--가입 버튼-->
                <b-col align-self="center" style="text-align: center;"><a href="#" class="join-btn">회원가입</a></b-col>
            </b-row>
        </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        tags: ['#태그1', '#태그2', '#태그3', '#태그4', '#태그5', '태그6', '태그7', '태그8', '태그9', '태그10', '태그11', '태그12', '태그13', '태그14', '태그15', '태그16', '태그17', '태그18', '태그19', '태그20'],
        selectedTags: []
      };
    },
    computed: {
      groupedTags() {
        let groups = [];
        for (let i = 0; i < this.tags.length; i += 4) {
          groups.push(this.tags.slice(i, i + 4));
        }
        return groups;
      }
    },
    methods: {
      selectTag(tag) {
        if (this.selectedTags.includes(tag)) {
          this.selectedTags = this.selectedTags.filter(t => t !== tag);
        } else {
          if (this.selectedTags.length < 5) {
            this.selectedTags.push(tag);
          } else {
            alert('최대 5개의 태그까지만 선택 가능합니다.');
          }
        }
        console.log(this.selectedTags);
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
    }

  .tag-row {
    margin-bottom: 10px;
  }
  
  .tag-button {
    border: #fff;
    background-color: skyblue;
    border-radius: 15px;
    margin-right: 10px;
    width: 160px; /* 너비를 설정합니다. */
    height: 50px; /* 높이를 설정합니다. */
    text-align: center; /* 텍스트를 가운데로 정렬합니다. */
    color: white;
    transform: scale(1);  /* 기본 크기 */
    transition: transform 2.0s ease;  /* 크기 변경에 애니메이션 적용 */
    transition: background-color 0.4s ease;
  }
  
  .tag-button:hover {
    transform: scale(1.1);  /* 마우스 오버시 10% 확대 */
  }

  .tag-selected {
    background-color: pink;
    color: white;
    transition: background-color 0.4s ease;
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