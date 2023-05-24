<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px 30px 0px;">
                <div style="padding-bottom: 15px;">
                    <h1>여행계획 상세 페이지</h1>
                </div>
                <div style="font-size: 15pt;"><span style="font-weight: bold; ">' {{ this.plan.user.userNm }} ' 님</span> 이 만든 여행계획입니다.</div>
            </div>

            
            <div class="row">
                <div class="col-8">
                    <span style="font-weight: bold; margin-right: 10px; font-size: 15pt;">
                    여행계획 제목 | </span> {{ this.plan.planTitle }}
                </div>
                <div class="col-4" style="text-align: right;">
                    작성일자: {{ this.plan.planCreate }}
                </div>
            </div>


            <div class="mb-3">

            </div>

            <div class="row" style="margin: 20px 0px;">

            </div>

            <div class="row" style="margin-bottom: 20px;">
                <div class="col-sm-12 col-md-12 col-lg-3">
                    <div style="margin: 10px 0px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">출발일자 | </span><span>{{ this.plan.planStart | formatDate }}</span>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-5" style="">
                    <div style="margin: 10px 0px;">
                        <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">도착일자 | </span><span>{{ this.plan.planEnd | formatDate }}</span>
                    </div>
                </div>

            </div>

            <div class="mb-3">
                <span style="font-weight: bold; margin-right: 5px; font-size: 15pt;">내용</span>
                <div style="margin-top: 3px;">{{ this.plan.planContent }}</div>
            </div>

            <div class="row align-self-center mb-2" style="display: flex; align-items: baseline;">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                    <div class="row" style="float: right;">
                        <div class="row">
                            <div style="padding-right: 3px;">
                                <b-button size="sm" @click="$router.push({ name: 'freeboardList' })">글목록</b-button>
                            </div>

                            <div style="padding-right: 3px;">
                                <b-button size="sm" variant="primary"
                                    @click="$router.push({ name: 'freeboardModify', params: { boardno: board.freeBoardNo } })">글수정</b-button>
                            </div>

                            <div style="margin-right: 30px;">
                                <b-button size="sm" variant="danger"
                                    @click="$router.push({ name: 'freeboardDelete', params: { boardno: board.freeBoardNo } })">글삭제</b-button>
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

export default {
    name: 'PlanWrite',
    components: {
    },
    data() {
        return {
            plan: {},
        };
    },
    created() {
        // 해당 계획 불러오기
        http.get(`/plan/${this.$route.params.boardno}`).then(({ data }) => {
            this.plan = data;
            console.log(this.plan)
        })
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

<style scoped></style>