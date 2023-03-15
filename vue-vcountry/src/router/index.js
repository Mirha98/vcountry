import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/country',
      name: 'country',
      component: () => import('../views/Country/CountryView.vue')
    },
    {
      path: '/country/:id',
      name: 'countryDetail',
      component: () => import('../views/Country/CountryDetail.vue'),
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
