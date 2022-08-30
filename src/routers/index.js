import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../views/Home.vue'
import AboutV from '../views/About.vue'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeV
  },
  {
    path: '/login',
    name: 'login',
    component:login
  },
  {
    path: '/logout',
    name: 'logout',
    component:logout
  },
  {
    path: '/about',
    name: 'About',
    component: AboutV,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router