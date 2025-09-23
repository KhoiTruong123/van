import { createRouter, createWebHistory } from 'vue-router'

// Import các component trang
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'

// Khai báo các route
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path:'/event', component:Event}
]

// Tạo instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
