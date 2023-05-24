<template>
    <div class="box">
        <div class="contentdetail">
            <div style="margin: 20px 0px 60px 0px;">
                <h2 style="padding-bottom: 10px;">관광지 상세정보</h2>

                <div class="row">
                    <div class="col-8">
                        <span style="font-size: 15pt;"><span style="font-weight: bold;">{{ attractionDto.title }}</span> 에
                            대한
                            상세정보입니다.</span>
                    </div>
                    <div class="col-4" style="text-align: right;">
                        평균별점: {{ rate }}
                    </div>
                    <div class="star-ratings">
	<div 
    class="star-ratings-fill space-x-2 text-lg"
    :style="{ width: ratingToPercent + '%' }"
	>
		<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
	</div>
	<div class="star-ratings-base space-x-2 text-lg">
		<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
	</div>
</div>
                </div>
            </div>

            <div style="margin: 20px 0px 60px 0px;">
                <div class="container" style="padding-bottom: 20px;">
                    <img v-if="attractionDto.firstImage" :src="attractionDto.firstImage" alt="이미지 불러오기 실패"
                        style="width: 100%; margin-bottom: 30px; box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; border-radius: 3pt;" />
                    <img v-else src="@/assets/img/no_image.jpg"
                        style="width: 200px; margin-bottom: 30px; border-radius: 3pt; display: block; margin: 0 auto; margin-bottom: 30px;" />
                </div>

                <div style="margin-bottom: 20px;">
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">주소</span><br>
                        <span>{{ attractionDto.addr }}</span>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">상세 주소 </span><br>
                        <span v-if="attractionDto.addr2">{{ attractionDto.addr2 }}</span>
                        <span v-else>상세주소 없음</span>
                    </div>
                </div>

                <div>
                    <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">설명</span><br>
                    <span>{{ attractionDesc.desc }}</span>
                </div>
            </div>

            <div style="margin: 20px 0px 60px 0px;">
                <div>
                    <div class = "row" style="padding-left: 15px; display: flex; align-items: baseline;" >
                        <h2 style="padding-right: 10px;">가볼만한 여행지 추천</h2>
                        <span style="">top 10</span>
                    </div>
                    <span>나와 비슷한 태그를 고른 사람들이 많이 선택한 순서대로 여행지가 추천됩니다.</span>
                </div>
                <div>
                    <carousel ref="carousel" :perPage="4" :navigation-enabled="true"
                        navigationPrevLabel='<i class="fas fa-angle-left"></i>'
                        navigationNextLabel='<i class="fa fa-angle-right" aria-hidden="true"></i>'>
                        <slide v-for="card in recommendAttr" :key="card.id"
                            style="box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;">
                            <!-- 카드 내용을 추가하세요 -->
                            <div class="card" style="height: 200px;">
                                <div style="width: 100%; height: 60%;" class="image-box">
                                    <img v-if="card.firstImage" :src="card.firstImage" alt="카드 이미지"
                                        class="image-thumbnail" />
                                    <div v-else class="image-thumbnail"
                                        style="display: flex; justify-content: center; align-items: center;">
                                        <img src="@/assets/img/no_image.jpg" style="max-width: 100%; max-height: 100%;" />
                                    </div>
                                </div>
                                <p>{{ card.title }}</p>
                                <p>{{ card.addr }}</p>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
            <div style="margin: 20px 0px;">
                <div style="display: flex; align-items: baseline;">
                    <div style="display: flex; align-items: baseline;">
                        <h2 style="margin-right: 10px;">후기</h2>
                        <span>총 {{ reviews.length }}건</span>
                    </div>
                    <div style="margin-left: auto;">
                        <a href="#" v-b-modal.review>후기 작성하기</a>

                        <b-modal id="review" title="BootstrapVue">
                            <template #modal-title>
                                <h2>관광지이름</h2>
                            </template>
                            <!-- https://melthleeth.tistory.com/entry/HTML-CSS%EB%A1%9C-%EB%B3%84%EC%B0%8D%EA%B8%B0-Star-Rating -->

                            <div class="star-rating space-x-4 mx-auto" style="margin-bottom: 10px;">
                                <input type="radio" id="5-stars" name="rating" value="5" v-model="ratings" />
                                <label for="5-stars" class="star pr-4">★</label>
                                <input type="radio" id="4-stars" name="rating" value="4" v-model="ratings" />
                                <label for="4-stars" class="star">★</label>
                                <input type="radio" id="3-stars" name="rating" value="3" v-model="ratings" />
                                <label for="3-stars" class="star">★</label>
                                <input type="radio" id="2-stars" name="rating" value="2" v-model="ratings" />
                                <label for="2-stars" class="star">★</label>
                                <input type="radio" id="1-star" name="rating" value="1" v-model="ratings" />
                                <label for="1-star" class="star">★</label>
                            </div>
                            <div style="margin-bottom: 10px;">
                                관광지의 후기를 등록해주세요.
                                <b-form-textarea id="textarea" v-model="text" placeholder="후기를 작성해주세요." rows="3"
                                    max-rows="3"></b-form-textarea>
                            </div>

                            <!-- https://bootstrap-vue.org/docs/components/form-file#multiple-files -->
                            <div>이미지 업로드</div>
                            <b-form-file multiple :file-name-formatter="formatNames"></b-form-file>

                        </b-modal>
                    </div>
                </div>

                <div style="background-color: rgba(255, 255, 255, 0.9);" v-if="reviews.length !== 0">
                    <div v-for="(review, i) in reviews" :key="i" style="padding: 15px 0px">
                        <div class="row" style="display: flex; padding-left:25px;">
                            <div style="padding-left: 5px;" class="col-2">
                                <!-- 작성자 이름 -->
                                <span>작성자: </span>
                                <span>{{ review.userNo }}</span>
                            </div>
                            <div style="padding-left: 5px;" class="col-2">
                                <!-- 작성자 이름 -->
                                <span>별점: </span>
                                <span>{{ rate | ratingToPercent}}</span>

                            </div>
                            <div class="row col-8" style="text-align: right; display: flex; justify-content: flex-end;">
                                <div>
                                    {{ review.attractionReviewCreate }}
                                </div>
                                <div style="margin-left: 5px;"><a href="#" style="color: black;">수정</a></div>
                                <div style="margin-left: 5px;"><a href="#" style="color: black;">삭제</a></div>
                            </div>
                        </div>


                        <div style="padding: 0 15px;">
                            {{ review.attractionReviewContent }}
                        </div>
                    </div>
                </div>
                <div v-else>
                    작성된 리뷰가 없습니다. 리뷰를 작성해주세요.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import http from "@/api/http";

export default {
    name: 'AttractionDetail',
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            message: '',
            attractionDto: Object, // attraction_info 정보있음
            attractionDesc: Object, // attraction_description 정보있음
            recommendAttr: [],
            reviews: [],
            rate: Number,
        };
    },
    created() {

        // 별점 보이기
        http.get(`/attraction/rate/${this.$route.params.attrno}`).then(({ data }) => {
            if (data == null) this.rate = 0;
            else {
                // rate에 맞게 별점 보이기
                this.rate = data.rate;
            }
        })

        // 여행지에 대한 상세정보 불러오기
        http.get(`/attraction/${this.$route.params.attrno}`).then(({ data }) => {
            // console.log(data)
            this.attractionDto = data.attractionDto;
            this.attractionDesc = data.attractionDesc;
            // console.log(this.attractionDto)
            // console.log(this.attractionDesc)
        })

        // 여행지에 대한 추천 불러오기
        http.get(`/recommend/${this.$route.params.attrno}`).then(({ data }) => {
            this.recommendAttr = data.data.recommendAttr
            console.log(this.recommendAttr);
        })

        // 댓글 불러오기
        http.get(`/attraction/${this.$route.params.attrno}/review`).then(({ data }) => {
            this.reviews = data;
            console.log(this.reviews)
        })
        
    },
    methods: {},
    filters: {
        ratingToPercent(rate) {
            const score = + rate - 10;
            return score;
        }
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
.container {
    width: 500px;
    overflow: hidden;
    /* 넘치는 이미지를 가린다 */
}

.container>img {
    height: 100%;
}

.image-box {
    overflow: hidden;
    margin: 0 auto;
}

.image-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentdetail {
    min-height: 80;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 80vw;
    padding: 30px 18px 43px;
    border-radius: 20px;
    /* background-color: #fff; */
}

/* 카드 스타일을 추가하세요 */
.card {
    /* 카드 스타일을 설정하세요 */
    margin: 5px;
    padding: 10px;
    border: 0px;
    background-color: rgba(255, 255, 255, 0.8);
}

.card>p {
    margin: 0px;
}
.star-ratings {
  color: #aaa9a9; 
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
}

.star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2.25rem;
    line-height: 2.5rem;
    justify-content: space-around;
    padding: 0 0.2em;
    text-align: center;
    width: 5em;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1.3px;
    -webkit-text-stroke-color: #2b2a29;
}

.star-ratings-fill {
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
}

.star-ratings-base {
    z-index: 0;
    padding: 0;
}
.star-rating input {
    display: none;
}

.star-rating label {
    -webkit-text-fill-color: transparent;
    /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #2b2a29;
    cursor: pointer;
}

.star-rating :checked~label {
    -webkit-text-fill-color: gold;
}

.star {
    padding-right: 5px;
}
</style>