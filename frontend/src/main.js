import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/main.css'
import './assets/styles/platforms.css'

const app = createApp(App)

// 集成Pinia
app.use(createPinia())
// 集成路由
app.use(router)

app.mount('#app')
