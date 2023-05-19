<template>
    <!-- 회원 가입 모달창 -->
    <b-modal id="signin" title="회원 가입">
        <div class="modal-body">
            <div class="row mb-1 text-center">
                <div class="col-3">이름</div>
                <div class="col">
                    <input id="username" name="userName" class="form-control" type="text"
                        placeholder="이름" v-model="userName"/>
                </div>
            </div>
            <div class="row mb-1 text-center">
                <div class="col-3">아이디</div>
                <div class="col">
                    <input id="userid" name="userId" class="form-control" type="text" placeholder="아이디" v-model="userId"/>
                </div>
            </div>
            <div id="idcheck-result"></div>
            <div class="row"></div>
            <div class="row mb-1 text-center">
                <div class="col-3">비밀번호</div>
                <div class="col">
                    <input id="userpwd-join" name="userPwd" class="form-control" type="password"
                        placeholder="비밀번호" v-model="userPwd"/>
                </div>
            </div>
            <div class="row mb-1 text-center">
                <div class="col-3">비밀번호확인</div>
                <div class="col">
                    <input id="pwdcheck" name="pwdcheck" class="form-control" type="password"
                        placeholder="비밀번호확인" v-model="pwdcheck"/>
                </div>
            </div>
            <div class="row mb-1 text-center">
                <div class="col-3">이메일</div>
                <div class="col-3">
                    <input id="emailid" name="emailId" class="form-control" type="text" placeholder="이메일" v-model="emailId"/>
                </div>
                <div class="col-1">
                    <span class="input-group-text"
                        style="background-color:white; border:none; padding-left:2px">@</span>
                </div>
                <div class="col">
                    <b-form-select class="form-select" id="emailDomain" name="emailDomain" v-model="emailDomain">
                        <option value="google.com">GOOGLE</option>
                        <option value="kakao.com">KAKAO</option>
                        <option value="naver.com">NAVER</option>
                    </b-form-select>
                </div>
            </div>
        </div>    
        <!-- modal footer override -->
        <template #modal-footer>
            <button v-b-modal.modal-close_visit class="btn btn-primary success btn-sm m-1" @click="signin">회원가입</button>
            <button v-b-modal.modal-close_visit class="btn btn-danger btn-sm m-1" @click="close">취소</button>
        </template>
    </b-modal>
</template>

<script>
// import http from "@/api/http";

export default {
    name: 'UserSigninItem',
    components: {},
    data() {
        return {
            message: '',
            userName: '',
            userId: '',
            userPwd: '',
            pwdcheck: '',
            emailId: '',
            emailDomain: '',

        };
    },
    created() {},
    methods: {
        signin() {
            // 회원가입로직
            // 창 닫기
            this.$bvModal.hide("signin")
        }, 
        close() {
            this.$bvModal.hide("signin")
        }
    },
};
</script>

<style scoped></style>