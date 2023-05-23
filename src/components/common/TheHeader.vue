<template>
	<div class="fixed-top shadow bg-light ">
		<b-navbar type="" variant="">
			<b-navbar-nav>
				<b-nav-item href="#index" id="enjoyTrip" @click="$router.push('/')">
					<span id="enjoyTrip" class="navbar-brand fs-3" style="font-size: 35px;">tofy</span></b-nav-item>
			</b-navbar-nav>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#" @click="$router.push('/attraction')">지역별여행지</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/plan')">여행계획세우기</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/worldcup')">여행지월드컵</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/freeboard')">자유게시판</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/notice')">공지사항</b-nav-item>
				</b-navbar-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown text="" right>
						<template #button-content>
							<span v-if="userInfo">{{ userInfo.userId }} 님</span>
							<span v-else>회원관리</span>
						</template>
						<!-- <b-dropdown-item href="#" @click="signin" v-b-modal.signin>회원가입</b-dropdown-item> -->
						<!--로그인 상태-->
						<div v-if="userInfo">
							<b-drop-item href="#" @click="$router.push('/mypage')">마이페이지</b-drop-item>
							<b-drop-item href="#" @click="onClickLogout">로그아웃</b-drop-item>
						</div>
						<!--로그아웃 상태-->
						<div v-else>
							<b-dropdown-item href="#" @click="$router.push('/join')">회원가입</b-dropdown-item>
							<b-dropdown-item href="#" @click="$router.push('/login')">로그인</b-dropdown-item>
						</div>
					</b-nav-item-dropdown>

				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

const userStore = "userStore";

export default {
	name: 'TheHeader',
	components: {
	},
	data() {
		return {
			message: '',
		};
	},
	computed: {
		...mapState(userStore, ["isLogin", "userInfo"]),
		...mapGetters(["checkUserInfo"]),
	},
	methods: {
		...mapActions(userStore, ["userLogout"]),
		// ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
		onClickLogout() {
			// this.SET_IS_LOGIN(false);
			// this.SET_USER_INFO(null);
			// sessionStorage.removeItem("access-token");
			// if (this.$route.path != "/") this.$router.push({ name: "main" });
			console.log(this.userInfo.userid);
			//vuex actions에서 userLogout 실행(Backend에 저장 된 리프레시 토큰 없애기
			//+ satate에 isLogin, userInfo 정보 변경)
			// this.$store.dispatch("userLogout", this.userInfo.userid);
			this.userLogout(this.userInfo.userid);
			sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
			sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
			if (this.$route.path != "/") this.$router.push({ name: "home" });
		},
	},
};
</script>

<style scoped>
a {
	color: #86A0B1 !important;
}

span {
	text-decoration: none;
	color: #86A0B1 !important;
}
</style>