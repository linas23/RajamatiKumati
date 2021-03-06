import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from '@/components/homepage'
import signup from '@/components/auth/signup'
import login from '@/components/auth/login'
import profile from '@/components/profile'
import create from '@/components/createpost'
import main from '@/components/main'
import editprofile from '@/components/editprofile'
Vue.use(VueRouter)

const routes = [
  {path:'/home',name:'homepage',component:homepage},
  {path:'/',name:'homepage',component:homepage},
  {path:'/signup',name:'signup',component:signup},
  {path:'/login',name:'login',component:login},
  {path:'/profile',name:'profile',component:profile},
  {path:'/create',name:'create',component:create},
  {path:'/posts',name:'posts',component:main},
  {path:'/editprofile',name:'editprofile',component:editprofile}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
