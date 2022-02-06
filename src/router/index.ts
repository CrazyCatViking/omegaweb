import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GlobalPageLayout from '../components/GlobalPageLayout.vue';
import DiscordAuthPage from '../DiscordAuthPage.vue';
import TestPage from '../TestPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    components: {
      master: GlobalPageLayout,
    },

    children: [
      {
        path: '/',
        components: {
          content: TestPage,
        }
      }
    ],
  },
  {
    path: '/auth',
    name: 'Authenticate',
    components: {
      master: DiscordAuthPage,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
