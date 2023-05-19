<template>
    <div class = "shadow">
        <b-navbar type="" variant="">
            <b-navbar-nav>
                <b-nav-item href="#index" id="enjoyTrip" @click="$router.push('/')">
                    <span id="enjoyTrip" class="navbar-brand fs-3">Tofy</span></b-nav-item>
            </b-navbar-nav>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#"><span class = "header-style">지역별여행지</span></b-nav-item>
                    <b-nav-item href="#"><span class = "header-style">여행계획 세우기</span></b-nav-item>
                    <b-nav-item href="#"><span class = "header-style">여행지월드컵</span></b-nav-item>
                    <b-nav-item href="#"><span class = "header-style">자유게시판</span></b-nav-item>
                    <b-nav-item href="#"><span class = "header-style">공지사항</span></b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="회원관리" right>
                        <!-- <b-dropdown-item href="#" @click="signin" v-b-modal.signin>회원가입</b-dropdown-item> -->
                        <b-dropdown-item href="#" v-b-modal.signin>회원가입</b-dropdown-item>
                        <b-dropdown-item href="#" v-b-modal.login>로그인</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
    name: 'TheHeader',
    components: {
    },
    data() {
        return {
            message: '',
        };
    },
    created() { },
    methods: {},
};
</script>

<style scoped>
.header-style {
    color: #86A0B1;
}

.header-style .dropdown-toggle{
    color: #86A0B1;
}
</style>