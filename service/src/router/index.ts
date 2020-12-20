import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from "@/views/landing/Index.vue";
import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import Dashboard from "@/views/index/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '',
        name: 'Landing',
        component: Landing
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      },
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
