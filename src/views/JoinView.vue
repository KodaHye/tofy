<template>
    <b-container fluid class="container-box">
      <b-container fluid class="square">
        <b-row class="text-center" style="height: 20%;">
          <b-col align-self="center" style="font-size: 30px;">tofy</b-col>
        </b-row>
        <b-row>
          <b-col style="padding-left: 25px;">ID</b-col>
          <div class="w-100"></div>
          <b-col>
            <b-form-input
              v-model="userId"
              :class="{'is-invalid': isIdInvalid}"
              placeholder="Enter ID"
            ></b-form-input>
            <div class="invalid-feedback" v-if="isIdInvalid">
              This ID is already taken.
            </div>
          </b-col>
        </b-row>
        <b-row style="height: 40px;"></b-row>
        <b-row>
          <b-col style="padding-left: 25px;">Password</b-col>
          <div class="w-100"></div>
          <b-col>
            <b-form-input 
            v-model="userPw"
            :class="{'is-invalid': isPwInvalid}"
            placeholder="Enter Password"></b-form-input>
          </b-col>
          <div class="invalid-feedback" v-if="isPwInvalid">
              this. password is invalid.
            </div>
        </b-row>
        <b-row class="text-center" style="padding-top: 90px;">
          <b-col align-self="center" style="font-size: 20px;">
            <a class="login-btn" href="#">login</a>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </template>
  
  <script>
  export default {
    name: 'TheLogin',
    data() {
      return {
        userId: '',
        userPw: '',
        isIdInvalid: false,
        isPwInvalid: false
      };
    },
    methods: {
      checkIdAvailability() {
        // 서버에 아이디 중복 체크 요청을 보내는 로직을 작성합니다.
        // 이 예시에서는 임의로 아이디가 'test'인 경우를 중복으로 간주합니다.
        if (this.userId === 'test') {
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
  .container-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .square {
    width: 40vw;
    height: 60vh;
    background-color: white;
    border-radius: 5%;
  }
  
  .login-btn {
    color: black;
  }
  
  .login-btn:hover {
    color: black;
    border-top: solid;
    animation: alternate-reverse;
    text-decoration-line: none;
  }
  
  .is-invalid {
    border-color: red;
  }
  
  .invalid-feedback {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  </style>