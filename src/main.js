import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'
import '@fontsource/noto-serif/400.css'
import '@fontsource/noto-serif/700.css' 

createApp(App)
.use(router)
.mount('#app')
