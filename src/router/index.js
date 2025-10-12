import { createRouter, createWebHistory } from 'vue-router'

// Import các component trang
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Event from '../views/Event.vue'
import Music from '@/views/Music.vue'
import News from '@/views/News.vue'
import Program from '@/views/Program.vue'
import Contact from '@/views/Contact.vue'
import Policy from '@/views/Policy.vue'
import Gallery from '@/views/Gallery.vue'

// Khai báo các route
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path:'/event', component:Event},
  { path:'/music', component:Music},
  { path:'/news', component:News},
  { path:'/program', component:Program},
  { path:'/contact', component: Contact},
  { path:'/policy', component: Policy},
  { path:'/gallery', component: Gallery},

]

// Tạo instance router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
