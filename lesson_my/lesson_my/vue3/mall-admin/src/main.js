import { createApp } from 'vue'
import './style.css'
import App from './App.vue'  // 根组件
import router from '@/router'  // 路由的配置  模块化
// - 启动路由 路由接管项目
// - 组件库 按需加载
// - css reset ....
// - 全局要做的， 在这里

const app = createApp(App)  // web app

app
    .use(router)
    .mount('#app') // 挂载
