import { createRouter, createWebHashHistory } from 'vue-router'
// 4-5个界面
const routes = [
    // 路由的懒加载
    // @
    {
        path: '/',
        component: () => import('@/views/Home/index.vue')
    },
    {
        path: '/video/:id',
        component: () => import('@/views/Video/index.vue')
    },
    // 
    {
        path: '/search',
        component: () => import('@/views/Search/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router