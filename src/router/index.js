import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/meetupDetails',
    name: 'meetupDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/MeetupDetails.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
