import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/components/homepage'
import signup from '@/components/auth/signup'
import login from '@/components/auth/login'
Vue.use(VueRouter)

const routes = [

  {path:'/',name:'homepage',component:homepage},
  {path:'/signup',name:'signup',component:signup},
  {path:'/login',name:'login',component:login}

  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
