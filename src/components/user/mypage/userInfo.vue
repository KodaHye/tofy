<template>
    <b-container>
        <b-row>
            <!--상용자명 form-->
            <b-col>
                <b-row>
                    <b-col class="text-item">사용자 ID</b-col>
                    <div class="w-100"  style="margin-top: 7px;"></div>
                    <b-col><b-form-input readonly :value="this.userInfo.userId">ssafy</b-form-input></b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 13px;"></div>
            <!--사용자 닉네임 form-->
            <b-col>
                <b-row>
                    <b-col class="text-item">사용자명</b-col>
                    <div class="w-100"  style="margin-top: 7px;"></div>
                    <b-col><b-form-input readonly :value="this.userInfo.userNm">ssafy</b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input v-model="userNm" placeholder="Name" :value="this.userInfo.userNm"></b-form-input></b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 13px;"></div>
            <!--비밀번호 form-->
            <b-col>
                <b-row>
                    <b-col class="text-item">비밀번호</b-col>
                    <div class="w-100"  style="margin-top: 7px;"></div>
                    <b-col><b-form-input :type="password" readonly :value="this.userInfo.userPw"></b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input v-model="userPw" placeholder="password" :value="this.userInfo.userPw"></b-form-input></b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 13px;"></div>
            <!--이메일 form-->
            <b-col>
                <b-row>
                    <b-col>이메일</b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input readonly :value="this.userInfo.emailId  +'@' + this.userInfo.emailDomain"></b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col>
                        <!--email 입력-->
                        <b-row>
                            <b-col cols="5"><b-form-input v-model="emailId" :value="this.userInfo.emailId" placeholder="e-mail"></b-form-input></b-col>
                            <b-col cols="2"><b-form-input readonly value="@">@</b-form-input></b-col>
                            <b-col><b-form-select v-model="emailDomain" :options="options"></b-form-select></b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 30px;"></div>
            <!--수정/탈퇴 버튼-->
            <b-col align-self="center" style="text-align: center;">
                <a href="#" class="event-btn" @click="update()">수정</a>
                |
                <a href="#" class="event-btn">탈퇴</a>
            </b-col>
        </b-row>        
    </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const userStore = "userStore";

export default {
    name: 'UserInfoForm',
    data() {
        return {
            userId: null,
            userNm: null,
            userPw: null,
            emailId: null,
            emailDomain: null,
            options: ["ssafy.com", "naver.com", "gmail.com", "daum.net"]
        };
    },
    created() {
        this.userId = this.userInfo.userId;
    },
    computed: {
        ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
    },
    watch: {
        userNm() {
            console.log("이름 : " + this.userNm);
        }
    },  
    methods: {
        ...mapActions(userStore, ["userUpdate"]),
        async update() {
            const member = {
                userId: this.userId,
                userNm: this.userNm,
                userPw: this.userPw,
                emailId: this.emailId,
                emailDomain: this.emailDomain 
            }

            await this.userUpdate(member);
            alert("회원정보 수정 완료 !");
            this.$router.go(0);
        }
    },
};
</script>

<style scoped>
   .text-item {
    font-size: 15px;
   }
   
   .event-btn {
    color: black;
   }

   .event-btn:hover {
    text-decoration: none;
    border-top: solid black;
   }
</style>