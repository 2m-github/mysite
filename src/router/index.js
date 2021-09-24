import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FullBase from '../container/FullBase.vue'


Vue.use(VueRouter)
const pageLoad = (component) => {
  return () => import(`../views/${component}.vue`);
}
const routes = [
  {
    path: '/',
    component: FullBase,
    children: [
      {
        path: '/parallax',
        name: 'Parallax',
        component: pageLoad('Parallax')
      },
      {
        path: '/home',
        name: 'Home',
        component: pageLoad('Home')
      },
      {
        path: '/movie_detail/:movieID?',
        name: 'MovieDetail',
        component: pageLoad('MovieDetail')
      }
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.afterEach((to, from, next) => {
//   import('@/assets/scss/style.scss')
// })

export default router
