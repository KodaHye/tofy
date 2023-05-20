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
    path: '/mypage',
    name: 'myPage',
    component: () => import("@/views/MypageView.vue")
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
        name: 'freeboardlist',
        component: () => import("@/components/freeboard/FreeBoardListView"),
      },
      {
        path: 'write',
        name: 'freeboardwrite',
        component: () => import("@/components/freeboard/FreeBoardWriteView"),
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
        name: 'freeboardlist',
        component: () => import("@/components/plan/PlanListView"),
      },
    ]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
