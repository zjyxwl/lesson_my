# Vue的世界
    可以小程序迁移过来
    - 组件思想  components
        wxml + wxss + js 可复用组件
        页面有组件构成， 比标签高一个级别
    - 数据驱动思想  不需要找节点， setData()  自动更新
    - wx:for 指令  v-for
    - 路由
        /pages + app.json  tabbar  目录下就是路由
        wx.navigator({
            url:''
        })
        vue? vue-router

- 现代web App单页应用开发 SPA Single Page Application  10年  6年
    vue  https://unpkg.com/vue@next
    - 根节点

- Vue
    1. 现代当红的前端框架  好学  简单
    2. 组件化思想 数据驱动  
    3. Vue 是命名空间
        Vue.
    4. Vue.version vue 最新版 vue3
    5. 对照小程序， 迁移学习
        - template  <=>   wxml
            模板 {{}}  组件 指令
        - js  data() {

        }

- v-on:click   @click  代替
    this.content = ''   this  直接引用 data 里面数据
    this.$data.content=''
    vue ? 比react更友好  方便入门  学习成本低
    API  设计人性化
 
- Vue 底层源码
    1. data {}  如何监听, 重新编译模板?  Proxy  es6
    2. Vue 世界为什么杜绝dom  编程  #app  ?
        DOM 编程慢...

- 占位符与数据绑定的区别
    普遍的html  里输出的 占位符  {{}}
    标签的属性 或组件的props 里 数据绑定
    - v-bind:value 绑定值   :value   单向数据绑定
        v-on:input 绑定事件    v-on  简写为 @
    - 单向数据?
        v-bind:value  +  v-on:input