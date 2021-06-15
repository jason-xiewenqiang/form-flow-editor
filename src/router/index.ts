import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
import Grid from '../views/grid/index.vue'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/grid',
    children: [
      {
        path: '/grid',
        name: 'Grid',
        component: Grid
      },
      {
        path: '/table',
        name: 'Table',
        component: import(/* webpackChunkName: "table" */ '../views/table/Index.vue')
      },
    ]
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
    next()
    NProgress.done()
  }, Math.random() * 300)
})

export default router
