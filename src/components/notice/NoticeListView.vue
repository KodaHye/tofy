<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 20px;">
                <div>
                    <h2>공지사항 게시판입니다.</h2>
                </div>
                <div><span>공지사항을 확인해주세요.</span></div>

            </div>
            <div class="row align-self-center mb-2">
                <div class="col-md-2 text-start">
                    <b-button v-if="this.userInfo.adminFl == 'Y'" variant="outline-primary"
                        @click="$router.push({ name: 'noticeWrite' })">글쓰기</b-button>
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
                    <notice-list-item v-for="(notice, i) in noticeList" :key="i" :notice="notice"></notice-list-item>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import http from "@/api/http";
import NoticeListItem from "@/components/notice/NoticeListItemView";

import { mapState } from "vuex";
const userStore = "userStore";

export default {
    name: 'NoticeView',
    components: {
        NoticeListItem,
    },
    data() {
        return {
            noticeList: [],
        };
    },
    created() {
        http.get('/notice').then(({ data }) => {
            this.noticeList = data;
            console.log(this.noticeList);
        })
    },
    computed: {
        ...mapState(userStore, ["userInfo"]),
    },
    methods: {},
};
</script>

<style scoped></style>