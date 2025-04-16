import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 导入全局样式 - CSS管理说明
// - fonts.css: 字体定义，需要最先导入以便CSS变量可使用
// - main.css: 全局CSS变量和基础样式
// - components.css: 共享组件样式，减少重复
// - platforms.css: 平台页面专用样式
// - animations.css: 动画定义和过渡效果
import './assets/styles/fonts.css'
import './assets/styles/main.css'
import './assets/styles/components.css'
import './assets/styles/platforms.css'
import './assets/styles/animations.css'

const app = createApp(App)

// 集成Pinia
app.use(createPinia())
// 集成路由
app.use(router)

app.mount('#app')
