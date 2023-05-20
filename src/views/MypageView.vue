<template>
    <div class="box">
        <div class="square">
            <b-row style="height: 50vh;">
                <!--사이드 바-->
                <b-col cols="3" style="border: solid; height: 100%;">
                    <b-row style="margin-top: 30px;">
                        <b-col class="sidebar-item">개인정보</b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item">태그</b-col>
                        <div class="w-100"></div>
                        <b-col class="sidebar-item">우승 여행지 목록</b-col>
                    </b-row>
                </b-col>
                <!--컴포넌트 (개인정보, 태그 수정, 우승 여행지 목록)-->
                <b-col style="border: solid; height: 100%;">
                
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TofyVueMypageView',

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
    min-height: 80%;
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

</style>