<template>
  <div class="box">
    <div class="contentdetail">
      <b-row class="text-center" style="height: 10%;">
        <b-col align-self="center" style="font-size: 30px;">tofy</b-col>
      </b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">ID</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input v-model="userId" :class="{ 'is-invalid': isIdInvalid }" placeholder="Enter ID"></b-form-input>
          <div class="invalid-feedback" v-if="isIdInvalid">
            사용할 수 없는 ID 입니다.
          </div>
        </b-col>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">이름</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input v-model="userNm" placeholder="Enter Name"></b-form-input>
        </b-col>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">Password</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input :id="`type-${type}`" :type="password" v-model="userPw" :class="{ 'is-invalid': isPwInvalid }"
            placeholder="Enter Password"></b-form-input>
        </b-col>
        <div class="invalid-feedback" v-if="isPwInvalid">
            비밀번호는 6자 이상이여야 합니다.
        </div>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">비밀번호 확인</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input v-model="userPwCheck" placeholder="Enter Password One More" :class="{ 'is-invalid': isPwCheckInvalid }"></b-form-input>
        </b-col>
        <div class="invalid-feedback" v-if="isPwCheckInvalid">
          비밀번호가 일치하지 않습니다.
        </div>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">이메일</b-col>
        <div class="w-100"></div>
        <b-col cols="5" style="padding: 0;">
          <b-form-input v-model="emailId" placeholder="e-mail"></b-form-input>
        </b-col>
        <b-col cols="1" style="padding: 0;">
          <b-form-input readonly value="@">@</b-form-input>
        </b-col>
        <b-col cols="6" style="padding: 0;">
          <b-form-select v-model="emailDomain" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <b-row style="height: 40px;"></b-row>
      <b-row class="text-center" style="padding-top: 1px;">
        <b-col align-self="center" style="font-size: 20px;">
          <a class="join-btn" href="#" @click="createUser()">join</a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
  
<script>
import { join, idCheck } from '@/api/user';

export default {
  name: 'TheJoin',
  data() {
    return {
      userId: '',
      userNm: '',
      userPw: '',
      userPwCheck: '',
      isIdInvalid: false,
      isPwInvalid: false,
      isPwCheckInvalid: false,
      message: '',
      emailId: '',
      emailDomain: '',
      options: ["ssafy.com", "naver.com", "gmail.com", "daum.net"]
    };
  },
  methods: {
    checkIdAvailability() {
      // 서버에 아이디 중복 체크 요청을 보내는 로직을 작성합니다.
      idCheck(
        this.userId,
        res => {
          console.log("응답",res);
          if (this.userId.length < 5 || res.data.status === "fail") {
            this.isIdInvalid = true;
          } else {
            this.isIdInvalid = false;
          }
        },
        err => {
          console.log(err);
        }
      )
    },
    checkPassword() {
      if (this.userPw.length < 6) {
        this.isPwInvalid = true;
      } else {
        this.isPwInvalid = false;
      }
    },
    checkPasswordOneMore() {
      if (this.userPw != this.userPwCheck) {
        this.isPwCheckInvalid = true;
      } else {
        this.isPwCheckInvalid = false;
      }
    },
    async createUser() {
      if (this.isIdInvalid) {
        alert("ID가 유효하지 않습니다.");
      }
      else if (this.isPwInvalid) {
        alert("비밀번호가 너무 짧습니다");
      }
      else if (this.isPwCheckInvalid) {
        alert("비밀번호 확인이 유효하지 않습니다.");
      } else {
        const user = {
          userId: this.userId,
          userNm: this.userNm,
          userPw: this.userPw,
          emailId: this.emailId,
          emailDomain: this.emailDomain
        }
        console.log("전송 할 데이터", user);
        await join(
          user,
          data => {
            console.log("join response status", data.status);
            alert("회원가입 완료");
            this.$router.push('/login');
          },
          err => {
            console.log("join error", err);
            alert("회원가입 실패");
          }
        )
      }

    }
  },
  watch: {
    userId() {
      this.checkIdAvailability();
    },
    userPw() {
      this.checkPassword();
    },
    userPwCheck() {
      this.checkPasswordOneMore();
    }
  }
};
</script>
  
<style>
.contentdetail {
    min-height: 80;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 50vw;
    padding: 30px 18px 43px;
    border-radius: 20px;
    background-color: #fff;
}

.join-btn {
  color: black;
}

.join-btn:hover {
  color: black;
  animation: alternate-reverse;
  text-decoration-line: none;
  animation: fadein 2s;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>