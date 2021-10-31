import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import RecruiterProfile from '../views/RecruiterProfile.vue'
import Signin from '../views/Signin.vue'
import RecruiterDashboard from '../views/RecruiterDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/recruiter-profile',
    name: 'RecruiterProfile',
    component: RecruiterProfile
  },
  {
    path: '/recruiter-dashboard',
    name: 'Recruiter Dashboard',
    component: RecruiterDashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
