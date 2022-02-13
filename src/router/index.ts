import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GlobalPageLayout from '../components/GlobalPageLayout.vue';
import DiscordAuthPage from '../DiscordAuthPage.vue';
import DashboardPage from '../Dashboard/DashboardPage.vue';
import PollPage from '../Polls/PollPage.vue';
import TestPage from '../TestPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      master: GlobalPageLayout,
    },

    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        components: {
          content: DashboardPage,
        }
      },
      {
        path: '/polls',
        name: 'Polls',
        components: {
          content: PollPage,
        }
      },
      {
        path: '/help',
        name: 'Help',
        components: {
          content: TestPage,
        }
      },
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
