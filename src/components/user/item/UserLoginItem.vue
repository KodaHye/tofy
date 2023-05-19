<template>
    <b-modal id="login" title="로그인">
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="form-check mb-3 float-end">
                        <!-- <input class="form-check-input" type="checkbox" value="ok" id="saveid" name="saveid" ${idck} />  -->
                        <input class="form-check-input" type="checkbox" value="ok" id="saveid" name="saveid" />
                        <label class="form-check-label" for="saveid"> 아이디저장 </label>
                    </div>
                </div>
                <div class="row mb-1 text-center">
                    <div class="col-3">아이디</div>
                    <div class="col">
                        <!-- <input type="text" placeholder="id" class="form-control" id="userid-login"
											name="userId" value="${saveid}" /> -->
                        <!-- <input type="text" placeholder="id" class="form-control" id="userid-login" name="userId"
                            value="${saveid}" /> -->
                        <input type="text" placeholder="id" class="form-control" id="userid-login" name="userId"/>
                    </div>
                    <div id="login-result"></div>
                    <div class="row"></div>
                </div>
                <div class="row mb-1 text-center">
                    <div class="col-3">비밀번호</div>
                    <div class="col">
                        <input type="password" placeholder="pw" class="form-control" id="userpwd-login" name="userPwd">
                    </div>
                </div>
            </div>
        </div>
        <!-- modal footer override -->
        <template #modal-footer>
            <button v-b-modal.modal-close_visit class="btn btn-secondary success btn-sm m-1" @click="findIdPwd">id/pw 찾기</button>
            <button v-b-modal.modal-close_visit class="btn btn-primary success btn-sm m-1" @click="login">로그인</button>
            <button v-b-modal.modal-close_visit class="btn btn-danger btn-sm m-1" @click="cancel">취소</button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'UserLoginItem',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() { },
    methods: {
        findIdPwd() {

        }, 
        login() {
            // 로그인 로직
            // 모달 창 닫기
            this.$bvModal.hide("signin")
        },
        cancel() {
            this.$bvModal.hide("signin")
        }
    },
};
</script>

<style scoped></style>