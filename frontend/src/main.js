import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/styles/fonts.css' // 首先导入字体，以便CSS变量可用
import './assets/styles/main.css'
import './assets/styles/platforms.css'
import './assets/styles/animations.css'

const app = createApp(App)

// 集成Pinia
app.use(createPinia())
// 集成路由
app.use(router)

app.mount('#app')
