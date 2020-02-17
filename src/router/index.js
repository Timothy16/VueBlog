import Vue from 'vue'
import VueRouter from 'vue-router'
import addBlog from '../views/addBlog.vue'
// import blog from '@/views/blog.vue'
import home from '@/components/home.vue'
// import Home from '../views/Home.vue'


Vue.use(VueRouter)





const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/blog',
    // name: 'blog',
    // component: blog
  },
  {
    path: '/addBlog',
    name: 'addBlog',
    component: addBlog
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
