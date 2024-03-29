import {  inject, reactive } from 'vue'

const STORE_KEY = '__store__'

function useStore() {
    return inject(STORE_KEY)  // 引用
}

function createStore(options) {
    // 需要store 实例 
    // install  app.use vue 和周边生态的约定
    //  面向对象封装思想
    // 在main.js 入口调用一次， 状态树是单一的，数据是唯一且正确 CEO 主席
    return new Store(options)
}
// js  为了像大型语言 java  面向对象能力的提升
// class 只是语法糖 function + prototype
class Store {
    constructor(options) {
        // this -> store 
        // 两种方法访问状态
        // useStore + store.state.count
        // store.$options.state
        this.$options = options // store对象添加了$options 属性
        // _私有
        this._state = reactive({
            data: options.state()
        }) 
        this._mutations = options.mutations   // 编程规范上 mutation 不能修改
    }
    // get方法  store.state
    get state() {
        console.log('.......')
        return this._state.data
    }
    // set state(newVal) {
    //     console.log('????')
    //     this._state.data = newVal
    // }
    install(app) {
        // console.log('install')
        app.provide(STORE_KEY, this)
    }
    // type 对应  mutations key
    // payload 传参
    commit(type, payload) {
        const entry = this._mutations[type]
        console.log(entry, 'commit')
        entry && entry(this.state, payload)
    }
}



const PI = 3.1415926
const area = (r) => 2 * PI * r

// 在一个模块中只能有一次
export { 
    createStore,
    useStore
}