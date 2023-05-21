<template>
    <div class="box">
        <div class="square">
            <b-row style="height: 60vh; overflow: scroll;">
                <!--사이드 바-->
                <b-col cols="3" style="height: 100%; border-right: solid; position: sticky;">
                    <b-row style="margin-top: 30px;">
                        <b-col class="sidebar-item"><a href="#" @click="$router.push('/mypage/userInfo')">개인정보</a></b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item"><a href="#" @click="$router.push('/mypage/tag')">태그정보</a></b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item"><a href="#" @click="$router.push('/mypage/worldcupList')">우승 여행지 목록</a></b-col>
                    </b-row>
                </b-col>
                <!--컴포넌트 (개인정보, 태그 수정, 우승 여행지 목록)-->
                <b-col style="height: 100%; overflow: scroll;">
                    <b-row>
                        <b-col style="font-size: 30px; text-align: center;">{{names}}</b-col>
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


export default {

    name: 'TofyVueMypageView',
    components: {},
    data() {
        return {
            names: ''
        };
    },

    mounted() {
        this.names = "개인 정보";
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
    max-width: 80vw;
    height: auto;
    height: 100%;
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

</style>