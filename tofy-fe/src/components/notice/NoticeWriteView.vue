<template>
    <div class="box">
        <div class="content">
            <div style="margin: 20px;">
                <div>
                    <h1>공지사항을 작성해주세요.</h1>
                </div>
            </div>

            <div class="mb-3">
				<label for="title" class="form-label">제목</label> 

                    <input
					type="text" class="form-control" id="title" name="title"
					placeholder="제목..." v-model="notice.noticeTitle"/>
			</div>
            
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea class="form-control" id="content" name="content" rows="7" placeholder="내용 입력..." v-model="notice.noticeContent"></textarea>
			</div>
            
			<div class="col-auto text-center">
				<button type="button" id="btn-register"
					class="btn btn-outline-primary mb-3" @click="writeNoticeBoard">글작성</button>
				<button type="reset" class="btn btn-outline-danger mb-3">초기화</button>
			</div>
        </div>
    </div>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";
const userStore = "userStore";

export default {
    
    name: 'NoticeWrite',
    components: {},
    data() {
        return {
            message: '',
            notice: {
                userNo: "",
                noticeTitle: "",
                noticeContent: "",
            },
        };
    },
    created() {
        console.log(">>" + this.userInfo)
    },
    methods: {
        writeNoticeBoard() {
            this.notice.userNo = this.userInfo.userNo
            
            // console.log(this.notice.userNo)
            http.post(`/notice`, this.notice);
            alert("공지사항이 등록되었습니다.")
            this.$router.push("/notice/list")
        }  
    },
    computed: {
		...mapState(userStore, ["userInfo"]),
  },
};
</script>

<style scoped></style>