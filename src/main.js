import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import '/assets/main.css'
import '@fontsource/noto-serif/400.css'
import '@fontsource/noto-serif/700.css'
import "@fontsource/noto-serif-display/400.css"; // Regular
import "@fontsource/noto-serif-display/700.css"; // Bold
import i18n from './i18n'

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
