import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "About" */ '../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((from, to, next) => {
  NProgress.start()
  setTimeout(() => {
    NProgress.done()
    next()
  }, Math.random() * 1000)
})

export default router
