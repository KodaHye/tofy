<template>
    <div class="box">
        <div class="content" style="padding-bottom: 5px;">
            <div style="margin: 20px 0px;">
                <div>
                    <h2>{{ notice.noticeTitle }}</h2>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <div class="clearfix align-content-center">
                            <!-- 사용자 이미지도 불러오도록 -->
                            <img class="avatar me-2 float-md-start bg-light p-2"
                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" />
                            <span class="fw-bold">관리자</span>
                            <span class="text-secondary fw-light"> {{ notice.noticeCreate }} 조회 : {{ notice.noticeHit }}
                            </span>
                        </div>
                    </div>
                </div>
                <hr>

                <div style="height: 200px; padding: 0px 10px;">
                    {{ notice.noticeContent }}
                </div>

                <hr>
                <div class="row align-self-center mb-2" style="display: flex; align-items: baseline;">
                    <div class="col-md-5"></div>
                    <div class="col-md-7">
                        <div class="row" style="float: right;">
                            <div class="row">
                                <div style="padding-right: 3px;">
                                    <b-button size="sm" @click="$router.push({ name: 'noticeList' })">공지사항 목록</b-button>
                                </div>

                                <div style="padding-right: 3px;">
                                    <b-button size="sm" variant="primary"
                                        @click="$router.push({ name: 'noticeModify', params: { noticeno: notice.noticeNo } })">글수정</b-button>
                                </div>

                                <div style="margin-right: 30px;">
                                    <b-button size="sm" variant="danger"
                                        @click="$router.push({ name: 'noticeDelete', params: { notice: notice.noticeNo } })">글삭제</b-button>
                                </div>
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
    name: 'NoticeDetail',
    components: {},
    data() {
        return {
            message: '',
            notice: {},
        };
    },
    created() {
        http.get(`/notice/${this.$route.params.noticeno}`).then(({ data }) => {
            this.notice = data,
                console.log(data)
        })
    },
    methods: {},
};
</script>

<style scoped></style>