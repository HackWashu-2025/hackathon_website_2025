import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Workshops from '../components/Workshops.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/workshops', name: 'Workshops', component: Workshops },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
