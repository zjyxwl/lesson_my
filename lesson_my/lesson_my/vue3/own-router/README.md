- 手写vue-router 怎么搞
    1. vue-router ？ 类 模块
        import {
            createRouter,
            createWebHashHistory
        } from 'vue-router'
        createRouter 方法 option
        createWebHashHistory  事件的监听  hashChange
    2. 组件的匹配
        如何放到router-view 里面 slot ？
    3. router-link   router-view  组件
        Vue.component()
    4. vue.use()  支持

- app.use(router)
    1. router ? 
        vue 生态的代表  vue-router vuex Elment-plus vant
        vue 只负责响应式和组件化等核心能力， 其他交给周边框架
        嫁接的入口 vue 主动去调用install 方法
    2. install
        声明router-link router-view 两个全局组件

- <component :is="component" />
    组件占位
    动态绑定

- 组件通信的API
    app.provide(KEY, component)  跨组件共享 全局对象 useRouter()  useStore()
    inject(KEY) 使用这个全局对象

- 响应式的底层逻辑
    订阅发布者模式

    当我们使用到 ref/reactive 绑定的值后, router-view  router.current.value  匹配routes组件
    真正的意思是订阅了 current 这个值
    当current.value 在 hashchange 发生后, 改变了, 发布出去
    所有的发布者都会得到这个消息 自动更新
