<template>
	<div class = "fixed-top shadow bg-light ">
		<b-navbar type="" variant="">
			<b-navbar-nav>
				<b-nav-item href="#index" id="enjoyTrip" @click="$router.push('/')">
					<span id="enjoyTrip" class="navbar-brand fs-3">Enjoy Trip</span></b-nav-item>
			</b-navbar-nav>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#" @click="$router.push('/attraction')">지역별여행지</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/attraction')">여행계획세우기</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/attraction')">여행지월드컵</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/freeboard')">자유게시판</b-nav-item>
					<b-nav-item href="#" @click="$router.push('/attraction')">공지사항</b-nav-item>
				</b-navbar-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown  text="" right>
						<template #button-content>
							<span>회원관리</span>								
						</template>
						<!-- <b-dropdown-item href="#" @click="signin" v-b-modal.signin>회원가입</b-dropdown-item> -->
						<b-dropdown-item href="#" v-b-modal.signin>회원가입</b-dropdown-item>
						<b-dropdown-item href="#" v-b-modal.login>로그인</b-dropdown-item>
					</b-nav-item-dropdown>
					
					<!-- 회원가입 모달창 -->
					<user-signin-item></user-signin-item>

					<!-- 로그인 모달창 -->
					<user-login-item></user-login-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>

import UserSigninItem from "@/components/user/item/UserSigninItem.vue"
import UserLoginItem from "@/components/user/item/UserLoginItem.vue";

export default {
	name: 'TheHeader',
	components: {
		UserSigninItem,
		UserLoginItem,
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
a {
    color: #86A0B1 !important;
}

span {
	text-decoration: none;
	color: #86A0B1 !important;
}

</style>