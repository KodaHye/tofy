<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h3>여행계획 게시판 입니다.</h3>
                </div>
                <div><span>자신이 만든 여행계획을 공유해요.</span></div>

            </div>
            <div class="">
                <div class="row align-self-center mb-2">
                    <div class="col-md-2 text-start">
                        <b-button variant="outline-primary" @click="$router.push({ name: 'planWrite' })">계획 만들기</b-button>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-md-7">
                        <div class="row" style="float: right;">
                            <div style="padding-right: 5px;">
                                <b-form-select name="sort_list" id="sort_list" style="width: 130px;" aria-label="정렬조건"
                                    :value="null">
                                    <option value="null">게시글 정렬</option>
                                    <option value="notice">최신 순</option>
                                    <option value="sort_hit">조회수 순</option>
                                </b-form-select>
                            </div>
                            <div style="padding-right: 5px;">
                                <!-- <input type="hidden" name="action" value="notice" /> <input
						type="hidden" name="pgno" value="1" />  -->
                                <b-form-select name="key" id="key" style="width: 130px" aria-label="검색조건" :value="null">
                                    <option value="null">검색조건</option>
                                    <option value="article_no">글번호</option>
                                    <option value="subject">제목</option>
                                    <option value="user_id">작성자</option>
                                </b-form-select>
                            </div>
                            <div style="padding-right: 5px;">
                                <b-input type="text" name="word" id="word" style="width: 150px" placeholder="검색어..." />
                                <!-- <b-button id="btn-search" class="btn btn-dark" type="button">검색</b-button> -->
                            </div>
                            <div style="padding-right: 5px;">
                                <b-button>검색</b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-self-center mb-2"></div>
                <table class="table table-hover">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">글번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">작성자</th>
                            <th scope="col">조회수</th>
                            <th scope="col">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <plan-list-item
                        v-for="(planboard, i) in planList" :key="i" :planboard="planboard">안녕</plan-list-item>
                        <!-- <free-board-list-item v-for="(freeboard, i) in freeboardList" :key="i" :board="board"></free-board-list-item> -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import http from "@/api/http";
import PlanListItem from "@/components/plan/PlanListItemView";

export default {
    name: 'PlanList',
    components: {
        PlanListItem,
    },
    data() {
        return {
            message: '',
            planList: [],
        };
    },
    created() {
        http.get(`/plan`).then(({ data }) => {
            this.planList = data;
            console.log(this.planList);
        })
    },
    methods: {},
};
</script>

<style scoped>
</style>