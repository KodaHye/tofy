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
          <b-form-input placeholder="Enter Name"></b-form-input>
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
          this. password is invalid.
        </div>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">비밀번호 확인</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input placeholder="Enter Password One More"></b-form-input>
        </b-col>
      </b-row>
      <b-row style="height: 35px;"></b-row>
      <b-row>
        <b-col style="padding-left: 20px; margin-bottom: 5px;">이메일</b-col>
        <div class="w-100"></div>
        <b-col>
          <b-form-input placeholder="e-mail" style="width: 230px"></b-form-input>
        </b-col>
        <b-col>
          <b-form-input readonly style="width: 50px;">@</b-form-input>
        </b-col>
        <b-col>
          <b-form-select :options="options" style="width: 205px;"></b-form-select>
        </b-col>
      </b-row>
      <b-row style="height: 40px;"></b-row>
      <b-row class="text-center" style="padding-top: 1px;">
        <b-col align-self="center" style="font-size: 20px;">
          <a class="join-btn" href="#">join</a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'TheJoin',
  data() {
    return {
      userId: '',
      userPw: '',
      isIdInvalid: false,
      isPwInvalid: false,
      message: '',
      options: ["ssafy.com", "naver.com", "gmail.com", "daum.net"]
    };
  },
  methods: {
    checkIdAvailability() {
      // 서버에 아이디 중복 체크 요청을 보내는 로직을 작성합니다.
      // 이 예시에서는 임의로 아이디가 'test'인 경우를 중복으로 간주합니다.
      if (this.userId.length < 6)
        if (this.userId === 'ssafy') {
          this.isIdInvalid = true;
        } else {
          this.isIdInvalid = false;
        }
    },
    checkPassword() {
      if (this.userPw.length < 6) {
        this.isPwInvalid = true;
      } else {
        this.isPwInvalid = false;
      }
    }
  },
  watch: {
    userId() {
      this.checkIdAvailability();
    },
    userPw() {
      this.checkPassword();
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