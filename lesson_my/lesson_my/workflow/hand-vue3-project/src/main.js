// import App from './App.vue'  // 引入App.vue 但目前 .vue文件无法识别
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#root')
// const root = document.getElementById('root')
// root.textContent = 'fdjfdj'