// import App from './App.vue'  // 引入App.vue 但目前 .vue文件无法识别
import { createApp } from 'vue'
import App from './App.vue'
import './assets/a.png'     // 一切静态资源都可以打包

const app = createApp(App)
app.mount('#root')
// const root = document.getElementById('root')
// root.textContent = 'fdjfdj'