import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 集成Pinia
app.use(createPinia())
// 集成路由
app.use(router)

app.mount('#app')
