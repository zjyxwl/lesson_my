import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app
    .use(store)    // install 去扩展vue 的this 原型链上加上一个$store 指向store
    .mount('#app')
