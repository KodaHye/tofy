<template>
    <b-container>
        <b-row>
            <b-col>
                <b-row>
                    <b-col class="text-item">사용자명</b-col>
                    <div class="w-100"  style="margin-top: 7px;"></div>
                    <b-col><b-form-input readonly value="ssafy">ssafy</b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input placeholder="Name"></b-form-input></b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 13px;"></div>
            <!--비밀번호 form-->
            <b-col>
                <b-row>
                    <b-col class="text-item">비밀번호</b-col>
                    <div class="w-100"  style="margin-top: 7px;"></div>
                    <b-col><b-form-input :type="password" readonly value="12345678"></b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input placeholder="password"></b-form-input></b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 13px;"></div>
            <!--이메일 form-->
            <b-col>
                <b-row>
                    <b-col>이메일</b-col>
                    <div class="w-100"></div>
                    <b-col><b-form-input readonly value="ssafy@ssafy.com"></b-form-input></b-col>
                    <div class="w-100"></div>
                    <b-col>
                        <!--email 입력-->
                        <b-row>
                            <b-col cols="5"><b-form-input placeholder="e-mail"></b-form-input></b-col>
                            <b-col cols="2"><b-form-input readonly value="@">@</b-form-input></b-col>
                            <b-col><b-form-select :options="options"></b-form-select></b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <div class="w-100" style="margin-top: 30px;"></div>
            <!--수정/탈퇴 버튼-->
            <b-col align-self="center" style="text-align: center;">
                <a href="#" class="event-btn">수정</a>
                |
                <a href="#" class="event-btn">탈퇴</a>
            </b-col>
        </b-row>        
    </b-container>
</template>

<script>
export default {
    name: 'UserInfoForm',
    data() {
        return {
            userNm: '',
            userPw: '',
            emailId: '',
            emailDomain: '',
            options: ["ssafy.com", "naver.com", "gmail.com", "daum.net"]
        };
    },
    methods: {
        submitForm() {
            // form 제출 로직을 여기에 작성하세요.
            console.log(this.username);
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