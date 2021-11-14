import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Signin from '../views/Signin.vue'
import RecruiterDashboard from '../views/RecruiterDashboard.vue'
import PostJob from '../views/PostJob.vue'
import GetStarted from '../views/GetStarted.vue'
import UserDashboard from '../views/UserDashboard.vue'
import JobRequisition from '../views/JobRequisition.vue'
import UserProfile from '../views/UserProfile.vue'
import UserGetStarted from '../views/UserGetStarted.vue'
import Application from '../views/Application.vue'
import Candidates from '../views/Candidates.vue'
import EditResume from '../views/EditResume.vue'
import EditProfile from '../views/EditProfile.vue'

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
    path: '/get-started',
    name: 'get-started',
    component: GetStarted
  },
  {
    path: '/recruiter-dashboard',
    name: 'recruiter-dashboard',
    component: RecruiterDashboard
  },
  {
    path: '/post-job',
    name: 'post-job',
    component: PostJob
  },
  {
    path: '/job-requisition',
    name: 'job-requisition',
    component: JobRequisition
  },
  {
    path: '/candidates/:jobId',
    name: 'candidates',
    component: Candidates
  },
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: UserDashboard
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    component: UserProfile
  },
  {
    path: '/user-get-started',
    name: 'user-get-started',
    component: UserGetStarted
  },
  {
    path: '/application',
    name: 'application',
    component: Application
  },
  {
    path: '/edit-resume',
    name: 'edit-resume',
    component: EditResume
  },
  {
    path: '/edit-profile',
    name: 'edit-profile',
    component: EditProfile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
