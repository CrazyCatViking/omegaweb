import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TestPage from '../TestPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TestPage',
    component: TestPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
