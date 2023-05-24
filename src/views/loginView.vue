<template>
    <div class="box">
        <div class="contentdetail">
            <b-row class="text-center" style="height: 20%;">
                <b-col align-self="center" style="font-size: 30px;">tofy</b-col>
            </b-row>
            <b-row>
                <b-col style="padding-left: 25px;">ID</b-col>
                <div class="w-100"></div>
                <b-col><b-form-input v-model="member.userId" placeholder="Enter ID"></b-form-input></b-col>
            </b-row>
            <b-row style="height: 40px;"></b-row>
            <b-row>
                <b-col style="padding-left: 25px;">Password</b-col>
                <div class="w-100"></div>
                <b-col><b-form-input type="password" v-model="member.userPw" @keyup.enter="confirm()" placeholder="Enter Password"></b-form-input></b-col>
            </b-row>
            <b-row class="text-center" style="padding-top: 50px;">
                <b-col align-self="center" style="font-size: 20px;">
                    <a class="login-btn" href="#" @click="confirm()">login</a>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
    name: 'TheLogin',
    data() {
        return {
            member: {
                userId: null,
                userPw: null,
            }
        }
    },

    computed: {
        ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
    },
    methods: {
        ...mapActions(userStore, ["userConfirm", "getUserInfo"]),
        async confirm() {
            await this.userConfirm(this.member);
            let token = sessionStorage.getItem("access-token");
            console.log("1. confirm() token >> " + token);
            if (this.isLogin) {
                await this.getUserInfo(token);
                console.log("4. confirm() userInfo :: ", this.userInfo);
                this.$router.push({ name: "home" });
            }
        },
        movePage() {
            this.$router.push({ name: "join" });
        },
    },
}
</script>

<style>
.contentdetail {
    min-height: 80;
    flex-grow: 1;
    margin: 0 auto;
    max-width: 40vw;
    padding: 30px 18px 43px;
    border-radius: 20px;
    background-color: #fff;
    margin-top: 10vh;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-fill-mode: both;
}

.login-btn {
    color: black;
}

.login-btn:hover {
    color: black;
    animation: change-color 0.3s forwards;
    text-decoration-line: none;
}

@keyframes change-color {
    0% {
        color: black;
    }

    25% {
        color: rgb(35, 35, 35);
    }

    50% {
        color: rgb(87, 86, 86);
    }

    75% {
        color: rgb(103, 103, 103);
    }

    100% {
        color: rgb(106, 106, 106);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>