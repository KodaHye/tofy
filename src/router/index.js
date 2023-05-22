import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/loginView.vue"),
  },
  {
    path: '/join',
    name: 'join',
    component: () => import("@/views/JoinView.vue")
  },
  {
    path: '/selectTag',
    name: 'selectTag',
    component: () => import("@/views/JoinSelectTagView")
  },
  {
    path: '/mypage',
    name: 'myPage',
    component: () => import("@/views/MypageView.vue"),
    children: [
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('@/components/user/mypage/UserInfo')
      },
      {
        path: 'tag',
        name: 'userTag',
        component: () => import('@/components/tag/TagItems')
      },
      {
        path: 'worldcupList',
        name: 'worldcupList',
        component: () => import('@/components/user/mypage/UserWorldCupWinner')
      }
    ]
  },
  {
    path: '/worldcup',
    name: 'worldcup',
    component: () => import("@/views/AttractionWorldCupView.vue"),
  },
  {
    path: '/freeboard',
    name: 'freeboard',
    redirect: "/freeboard/list",
    component: () => import("@/views/FreeBoardView"),
    children: [
      {
        path: 'list',
        name: 'freeboardList',
        component: () => import("@/components/freeboard/FreeBoardListView"),
      },
      {
        path: 'write',
        name: 'freeboardWrite',
        component: () => import("@/components/freeboard/FreeBoardWriteView"),
      },
      {
        path: 'modify/:boardno',
        name: 'freeboardModify',
        component: () => import("@/components/freeboard/FreeBoardModifyView"),
      },
      {
        path: 'detail/:boardno',
        name: 'freeboardDetail',
        component: () => import("@/components/freeboard/FreeBoardDetailView"),
      },
      {
        path: 'delete/:boardno',
        name: 'freeboardDelete',
        component: () => import("@/components/freeboard/FreeBoardDeleteView"),
      }
    ]
  }, 
  {
    path: '/notice',
    name: 'notice',
    redirect: "/notice/list",
    component: () => import("@/views/NoticeView"),
    children: [
      {
        path: 'list',
        name: 'noticeList',
        component: () => import("@/components/notice/NoticeListView"),
      },
      {
        path: 'write',
        name: 'noticeWrite',
        component: () => import("@/components/notice/NoticeWriteView"),
      }
    ]
  }, 
  {
    path: '/plan',
    name: 'plan',
    redirect: "/plan/list",
    component: () => import("@/views/PlanView"),
    children: [
      {
        path: 'list',
        name: 'planList',
        component: () => import("@/components/plan/PlanListView"),
      },
      {
        path: 'write',
        name: 'planWrite',
        component: () => import("@/components/plan/PlanWriteView"),
      },
    ]
  }, 
  {
    path: '/attraction',
    name: 'attraction',
    redirect: "/attraction/search",
    component: () => import("@/views/AttractionView"),
    children: [
      {
        path: 'search',
        name: 'attractionSearch',
        component: () => import("@/components/attraction/AttractionSearchView"),
      },
      {
        path: 'detail',
        name: 'attractionDetail',
        component: () => import("@/components/attraction/AttractionDetailView"),
      },
    ]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
  // '/' 경로일 때만 fullpage.min.js 파일 동적으로 로드
  const script = document.createElement('script')
  script.src = '/fullpage.min.js'
  document.head.appendChild(script)
  }

  next()
  })

export default router
