import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import store from "@/store";

Vue.use(VueRouter)

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["userStore/checkUserInfo"];
  const checkToken = store.getters["userStore/checkToken"];
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크");
    await store.dispatch("userStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요합니다.");
    // next({ name: "login" });
    await router.push({ name: "login" }).catch((error) => {
      if (error.name !== "NavigationDuplicated") {
        throw error;
      }
    });
  } else {
    console.log("로그인 완료");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestAosView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/loginView.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () => import("@/views/JoinView.vue"),
  },
  {
    path: "/selectTag",
    name: "selectTag",
    component: () => import("@/views/JoinSelectTagView"),
  },
  {
    path: "/mypage",
    name: "myPage",
    redirect: "/mypage/userInfo",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/MypageView.vue"),
    children: [
      {
        path: "userInfo",
        name: "userInfo",
        component: () => import("@/components/user/mypage/UserInfo"),
      },
      {
        path: "tag",
        name: "userTag",
        component: () => import("@/components/tag/TagItems"),
      },
      {
        path: "worldcupList",
        name: "worldcupList",
        component: () => import("@/components/user/mypage/UserWorldCupWinner"),
      },
    ],
  },
  {
    path: "/worldcup",
    name: "worldcup",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/AttractionWorldCupView.vue"),
  },
  {
    path: "/freeboard",
    name: "freeboard",
    redirect: "/freeboard/list",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/FreeBoardView"),
    children: [
      {
        path: "list",
        name: "freeboardList",
        component: () => import("@/components/freeboard/FreeBoardListView"),
      },
      {
        path: "write",
        name: "freeboardWrite",
        component: () => import("@/components/freeboard/FreeBoardWriteView"),
      },
      {
        path: "modify/:boardno",
        name: "freeboardModify",
        component: () => import("@/components/freeboard/FreeBoardModifyView"),
      },
      {
        path: "detail/:boardno",
        name: "freeboardDetail",
        component: () => import("@/components/freeboard/FreeBoardDetailView"),
      },
      {
        path: "delete/:boardno",
        name: "freeboardDelete",
        component: () => import("@/components/freeboard/FreeBoardDeleteView"),
      },
    ],
  },
  {
    path: "/notice",
    name: "notice",
    redirect: "/notice/list",
    component: () => import("@/views/NoticeView"),
    beforeEnter: onlyAuthUser,
    children: [
      {
        path: "list",
        name: "noticeList",
        component: () => import("@/components/notice/NoticeListView"),
      },
      {
        path: "write",
        name: "noticeWrite",
        component: () => import("@/components/notice/NoticeWriteView"),
      },
    ],
  },
  {
    path: "/plan",
    name: "plan",
    redirect: "/plan/list",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/PlanView"),
    children: [
      {
        path: "list",
        name: "planList",
        component: () => import("@/components/plan/PlanListView"),
      },
      {
        path: "write",
        name: "planWrite",
        component: () => import("@/components/plan/PlanWriteView"),
      },
      {
        path: 'planDetail/:boardno',
        name: 'planDetail',
        component: () => import("@/components/plan/PlanDetailView"),
      },
    ]
  }, 
  {
    path: "/attraction",
    name: "attraction",
    redirect: "/attraction/search",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/AttractionView"),
    children: [
      {
        path: "search",
        name: "attractionSearch",
        component: () => import("@/components/attraction/AttractionSearchView"),
      },
      {
        path: "detail/:attrno",
        name: "attractionDetail",
        component: () => import("@/components/attraction/AttractionDetailView"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {

  //다른 페이지에서 최초 태그 선택 페이지 이동 시도할 경우 가드
  if (to.path === '/selectTag' && from.path === '/') {
    alert("잘못된 요청입니다.");
    next({name : 'home'});
  }
  
  //최초 태그 선택창에서 이동
  if (from.path === '/selectTag') {
    //다음 창 이동 이므로 그냥 이동
    if (to.path === '/worldcup') {next()}
    //다른 창 이동 시도 시 태그 선택 후 이동하도록 유도
    else {
      alert("태그 등록 후 이동 가능합니다.");
      next(false);
    }
  }

  next();
});

export default router;
