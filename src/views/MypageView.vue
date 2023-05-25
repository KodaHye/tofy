<template>
    <div class="box">
        <div class="square">
            <b-row style="height: 60vh;">
                <!--사이드 바-->
                <b-col cols="3" style="height: 100%; border-right: solid; position: sticky;">
                    <b-row style="margin-top: 30px;">
                        <b-col class="sidebar-item"><a href="#" @click="change(0)">개인정보</a></b-col>
                        <div class="w-100"></div>
                        <!-- <b-col class="sidebar-item"><a href="#" @click="change(1)">태그정보</a></b-col> -->
                        <div class="w-100"></div>
                        <b-col class="sidebar-item"><a href="#" @click="change(2)">우승 여행지
                                목록</a></b-col>
                    </b-row>
                </b-col>
                <!--컴포넌트 (개인정보, 태그 수정, 우승 여행지 목록)-->
                <b-col style="height: 100%; overflow: auto;">
                    <b-row>
                        <b-col style="font-size: 30px; text-align: center; overflow: auto;">{{ selectName }}</b-col>
                        <div class="w-100" style="height: 30px;"></div>
                        <b-col>
                            <router-view></router-view>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
const userStore = "userStore";

export default {
    name: 'TofyVueMypageView',
    components: {},
    data() {
        return {
            names: ["개인정보", "태그정보", "여행지 월드컵 기록"],
            selectName: String,
        };
    },
    computed: {
        ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
    },
    mounted() {
        this.selectName = this.names[0];
    },

    methods: {
        async change(index) {
            this.selectName = this.names[index];
            if (index == 0) {
                await this.$router.push({name: 'userInfo'})
            } else if (index == 1) {
                await this.$router.push({name: 'userTag'});
            } else {
                await this.$router.push({name: 'worldcupList'})
            }
        }
    },
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
    min-height: 70vh;
    flex-grow: 1;
    margin: 0 auto;
    padding: 30px 18px 43px;
    border-radius: 20px;
    background-color: #fff;
    max-width: 80vw;
    height: auto;
    height: 100%;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: both;
}

.content-row {
    height: 100%;
    width: 100%;
    overflow: auto;
}

.sidebar {
    position: sticky;
    top: 0;
    max-height: 100%;
    overflow: auto;
}

.sidebar-item {
    color: black;
    margin-bottom: 40px;
    text-align: center;
}

.sidebar-item a {
    color: black;
}

.sidebar-item a:hover {
    border-top: solid gainsboro;
    text-decoration: none;
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