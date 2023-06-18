import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Index.vue'
import Dashboard from '../views/dashboard/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:'水勘院幼儿园'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: HomeView,
      meta:{
        title:'登录页'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: HomeView,
      meta:{
        title:'404'
      }
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dashboard,
      meta:{
        title:'水勘院幼儿园信息平台'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
	console.log(to.meta.title)
    document.title = String(to.meta.title)
  }
  next()
})


export default router
