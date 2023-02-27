import { createApp } from 'vue'
import store from './store'
// console.log(store.state.count)
// store.state = {a: 2}
import App from './App.vue'

const app = createApp(App)
app
    .use(store)
    .mount('#app')
