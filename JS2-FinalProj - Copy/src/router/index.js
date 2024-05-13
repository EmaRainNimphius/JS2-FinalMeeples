import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResourceView from '../views/ResourceView.vue'
import AccountView from '../views/AccountView.vue'
import MeepleView from "@/views/MeepleView.vue";
import JournalView from "@/views/JournalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/resources',
      name:'resources',
      component: ResourceView
    },
    {
      path: '/account',
      name:'account',
      component: AccountView
    },
    {
      path: '/meeple',
      name:'meeple',
      component: MeepleView
    },
    {
      path: '/journal',
      name:'journal',
      component: JournalView
    },
  ]
})

export default router
