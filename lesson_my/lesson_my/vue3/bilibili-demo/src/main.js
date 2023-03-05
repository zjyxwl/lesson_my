import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index'  // 模拟数据
import { createPinia } from 'pinia'
import {
    Swipe,
    SwipeItem,
    Lazyload
} from 'vant'
import 'vant/lib/index.js'
import 'lib-flexible/flexible'  // rem
import './assets/main.css'

const app = createApp(App)
app
    .use(router)
    .use(createPinia())
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .mount('#app')
