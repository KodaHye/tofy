<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px 0px;">
                <div>
                    <h2>{{ board.freeBoardTitle }}</h2>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <div class="clearfix align-content-center">
                            <!-- 사용자 이미지도 불러오도록 -->
                            <img class="avatar me-2 float-md-start bg-light p-2"
                                src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" />
                                <span class="fw-bold">{{ board.user.userNm }}</span>
                            <span class="text-secondary fw-light"> {{ board.freeBoardCreate }} 조회 : {{ board.freeBoardHit }}
                            </span>
                        </div>
                    </div>
                </div>
                <hr>

                <div style="height: 200px; padding: 0px 10px;">
                    {{ board.freeBoardContent }}
                </div>
            </div>

            <div class="row align-self-center mb-2" style="display: flex; align-items: baseline;">
                <div class="col-md-5"><span style="color: gray;">총 댓글: {{commentList.length}}개</span></div>
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

            <!-- 댓글 -->
            <div style="padding-bottom: 10px;">
                <hr>
                <!-- 댓글 보여주기 -->
                <div class="divider mt-3 mb-3 col-md-12"></div>
                <comment-list-item v-for="(comment, i) in commentList" :key="i" :comment="comment"></comment-list-item>

                <div class="row" style="margin-top: 10px; padding: 0px 15px;">
                    <b-form-textarea id="textarea" placeholder="댓글을 입력해주세요." rows="3" max-rows="3" v-model="freeboardComment"></b-form-textarea>
                </div>
                <div style="float: right; padding: 12px 0px;">
                    <b-button variant="light" size="sm" @click="writefreeboardComment">댓글 등록</b-button>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import http from "@/api/http";
import CommentListItem from "@/components/freeboard/CommentItem.vue"
import { mapState } from "vuex";

const userStore = "userStore";

export default {
    name: 'FreeBoardDetail',
    components: {
        CommentListItem,
    },
    data() {
        return {
            board: Object,
            message: '',
            freeboardComment: '',
            commentList: [],
        };
    },
    created() {
        http.get(`/freeboard/${this.$route.params.boardno}`).then(({ data }) => {
            this.board = data
        })

        http.get(`/freeboard/${this.$route.params.boardno}/comment`).then(({ data }) => {
            this.commentList = data;
            console.log(this.commentList);
        })
    },
    methods: {
        writefreeboardComment() {
            var comm = {
                userNo: this.userInfo.userNo,
                boardNo: this.$route.params.boardno,
                commentContent: this.freeboardComment,
            }
            console.log(comm);
            
            http.post(`/freeboard/${this.$route.params.boardno}/comment`, comm);
            // this.$router.push({ name: 'freeboardDetail', params: { boardno:  this.$route.params.boardno }})
            // 화면 reload하게 해야 됨
            this.$router.go();
             
        }
    },
    computed: {
		...mapState(userStore, ["userInfo"]),
    },
};
</script>

<style scoped></style>