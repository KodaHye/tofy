<template>
    <div class="box">
        <div class="square">
            <b-row style="height: 60vh;">
                <!--사이드 바-->
                <b-col cols="3" style="height: 100%; border-right: solid;">
                    <b-row style="margin-top: 30px;">
                        <b-col class="sidebar-item"><a href="#">개인정보</a></b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item"><a href="#">태그정보</a></b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item"><a href="#">우승 여행지 목록</a></b-col>
                    </b-row>
                </b-col>
                <!--컴포넌트 (개인정보, 태그 수정, 우승 여행지 목록)-->
                <b-col style="height: 100%;">
                    <user-info-form/>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import UserInfoForm from '@/components/user/mypage/userInfo.vue'

export default {

    name: 'TofyVueMypageView',
    components: {UserInfoForm},
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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
    max-width: 60vw;
    }
    
    .sidebar-item {
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

</style>