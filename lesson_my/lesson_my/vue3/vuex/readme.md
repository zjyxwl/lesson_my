- 组件 路由 数据管理
    跨层级 跨页面  共享状态 比如login
    前端工作 分两种
        组件开发（切页面 实习生）
        数据管理（越来越大的时候） 从组件本地（没什么状态 computed）抽离到中央（leader）

- 项目架构store
- vuex 共享状态来到本地的流程
    1. vuex 提供的useStore hooks api 拿到 store
    2. store.state.count  state 是状态对象 读操作
    3. 作为computed 计算属性的返回值， 当前的状态
        依赖于store.state.count 订阅count

    4. 全局$store 对象

- vuex 数据流转过程
    1. 本地组件 data()  reactive/ref 将被收到中央  方便共享和管理
    2. useStore() + 使用computed 计算属性  状态从中央到地方
    3. 本地不可以直接修改state， store.commit('add')
        提交一个mutation  名字一定要在mutation里
        管理数据

- vuex 的原则
    - vuex 是一种复杂的设计范式 管理中大型项目的状态（共享状态）
    - 小项目最好不要用vuex 组件自己管理状态 prop + emit
        localStroge... 共享
    - 组件基本不在自己管理状态
        actions 都在vuex 提供了
        data()  reactive ref 很少在组件里用了
    - store 全局管理状态
        全家桶之一  vuex/pinia  vuex 现在  pinia 是未来
        - createStore()  单一状态树  只能有一个仓库， 状态唯一
        - 分成多个模块 modules
            每个modules 都有独立的 state mutation actions
        - state 只读状态  对象
        - mutation 只有他可以修改state commit('')
        - actions 数据的请求不在发生在组件的内部， 而是在actions 中
            dispath 来发出action
    - vuex 数据流转流程
        - root(Store) -> modules(cart | products) -> state(声明) 状态的查找 读操作
        - 数据（服务器端） -> api (接口模块 products) -> actions(管理接口请求 dispath)
            -> mutation (commit 唯一修改数据 actions 里调用)   ->  ()