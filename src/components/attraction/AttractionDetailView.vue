<template>
    <div class="box">
        <div class="contentdetail">
            <div style="margin: 20px 0px 50px 0px;">
                <div>
                    <h2>관광지 상세정보</h2>
                </div>
                <div>
                    <span>{{ }}에 대한 상세정보입니다.</span>
                </div>
            </div>

            <div style="margin: 20px 0px 50px 0px;">
                <div class="row" style="margin-left: 5px;">
                    <div>
                        <h2>`{{ 관광지이름 }}`</h2>
                    </div>
                    <div>
                        평균별점:
                    </div>
                </div>

                <div style="margin-bottom: 10px;"><img src="" alt="이미지 불러오기 실패" /></div>

                <div style="margin-bottom: 20px;">
                    <div><span style="font-weight: bold;">주소</span></div>
                    <div>여행지 주소</div>
                </div>

                <div>설명</div>
            </div>

            <div style="margin: 20px 0px;">
                <div>
                    <h2>비슷한 여행지 추천</h2>
                    <span>해당 여행지와 비슷한 여행지 목록입니다.</span>
                </div>

                <div>
                    <carousel ref="carousel" :perPage="5">
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


            <div style="margin: 20px 0px;">
                <div style="display: flex; align-items: baseline;">
                    <div style="display: flex; align-items: baseline;">
                        <h2 style="margin-right: 10px;">후기</h2>
                        <span>총 {{ x }}건</span>
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

                <div>후기 리스트</div>
                <!-- <div v-for="(comment, i) in comments" :key="i">
                    <div style="float: right;">
                        {{ comment.registerTime }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x"
                            viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>

                    <div>
                        {{ comment.userId }}
                    </div>
                    {{ comment.comment }}
                    <hr>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'AttractionDetail',
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            message: '',
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
        };
    },
    created() { },
    methods: {},
};
</script>

<style scoped>
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
}

.card>p {
    margin: 0px;
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