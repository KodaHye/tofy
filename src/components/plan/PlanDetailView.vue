<template>
    <div class="box">
        <div class="content" style="padding-bottom: 5px;">
            <div style="margin: 20px 25px 5px 25px;">
                <div style="padding-bottom: 15px;">
                    <h1>여행계획 상세 페이지</h1>
                </div>

                <div class="row">
                    <div style="font-size: 15pt;" class="col-8">
                        <span style="font-weight: bold; ">' {{ this.plan.user.userNm }} ' 님</span>
                        이 만든 여행계획입니다.
                    </div>

                    <div class="col-4" style="text-align: right;">
                        작성일자: {{ this.plan.planCreate }}
                    </div>
                </div>
            </div>
            <hr>

            <div class="row" style="margin: 20px 15px 30px 15px;">
                <div class="col-8">
                    <span style="font-weight: bold; margin-right: 10px; font-size: 15pt;">
                        여행계획 제목 | </span> {{ this.plan.planTitle }}
                </div>
            </div>


            <div class="row" style="margin: 20px 15px 30px 15px;">
                <div class="col-8">
                    <span style="font-weight: bold; margin-right: 10px; font-size: 15pt;">
                        여행계획 경로 | </span>
                    <!-- 여행계획 경로 카드로 보이기 -->
                </div>
            </div>

            <div style="margin: 20px 15px 30px 15px;">
                <carousel ref="carousel" :perPage="4" :navigation-enabled="true"
                    navigationPrevLabel='<i class="fas fa-angle-left"></i>'
                    navigationNextLabel='<i class="fa fa-angle-right" aria-hidden="true"></i>'>
                    <slide v-for="card in planDetail" :key="card.id"
                        style="box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;">
                        <!-- 카드 내용을 추가하세요 -->
                        <div class="card" style="height: 200px;">
                            <div style="width: 100%; height: 60%; padding-bottom: 10px;" class="image-box">
                                <img v-if="card.firstImage" :src="card.attractionDto.firstImage" alt="카드 이미지"
                                    class="image-thumbnail" />
                                <div v-else class="image-thumbnail"
                                    style="display: flex; justify-content: center; align-items: center;">
                                    <img src="@/assets/img/no_image.jpg" style="max-width: 100%; max-height: 100%;" />
                                </div>
                            </div>
                            <p>{{ card.attractionDto.title }}</p>
                            <p>{{ card.attractionDto.addr }}</p>
                        </div>
                    </slide>
                </carousel>
            </div>

            <div class="row" style="margin: 20px 15px 30px 15px;">
                <div class="col-sm-12 col-md-12 col-lg-3">
                    <div style="margin: 10px 0px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">출발일자 | </span><span>{{
                            this.plan.planStart | formatDate }}</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-5" style="">
                    <div style="margin: 10px 0px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">도착일자 | </span><span>{{
                            this.plan.planEnd | formatDate }}</span>
                    </div>
                </div>

            </div>

            <div style="margin: 20px 30px 30px 30px;">
                <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">내용</span>
                <div style="margin-top: 3px;">{{ this.plan.planContent }}</div>
            </div>

            <hr>
            <div class="row align-self-center mb-2" style="display: flex; align-items: baseline;">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                    <div class="row" style="float: right;">
                        <div class="row">
                            <div style="padding-right: 3px;">
                                <b-button size="sm" @click="$router.push({ name: 'planList' })">여행계획 목록</b-button>
                            </div>

                            <div style="padding-right: 3px;">
                                <b-button size="sm" variant="primary"
                                    @click="$router.push({ name: 'planModify', params: { boardno: this.$route.params.boardno } })">글수정</b-button>
                            </div>

                            <div style="margin-right: 30px;">
                                <b-button size="sm" variant="danger"
                                    @click="$router.push({ name: 'planDelete', params: { boardno: this.$route.params.boardno } })">글삭제</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import http from "@/api/http";
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'PlanWrite',
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            plan: {},
            planDetail: [],
        };
    },

    created() {
        // 해당 계획 불러오기
        http.get(`/plan/${this.$route.params.boardno}`).then(({ data }) => {
            this.plan = data;
            this.card = data.planDetail;
            // this.card.length 만큼 반복문
            // planDetail에 push하기
            // console.log(data.planDetail.length)
            // console.log(this.card)

            for (var i = 0; i < data.planDetail.length; i++) {
                // http.get(`attraction/125266`)
                http.get(`attraction/${data.planDetail[i].contentId}`).then((response) => {
                    this.planDetail.push(response.data);  // 결과를 planDetail에 추가
                });
            }
            // console.log("planDetail")
            // console.log(this.planDetail)

        })

        console.log(this.plan)
    },
    methods: {

    },
    filters: {
        formatDate(value) {
            if (value) {
                const date = new Date(value);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                return `${year}-${month}-${day}`;
            }
        }
    }
};
</script>

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
    background-color: none;
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
</style>