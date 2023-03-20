- MVC
    - Model 数据层
    - View 视图层
    职责分明 MV 不能直接通信 
    Control 来负责 逻辑 参数校验 中间计算 用户session...
- KOA
    极简的node 开发框架
    - context = req + res
    - 中间件
        函数


## 后端思维
    MVVM -> MVC
    view html 有 完整的html + DOM （原生js jquery）
- 3000
    后端安全的一部分
    配置化

- 洋葱模型
    koa 提供服务和架构的本质 node 服务器编程的简单
    123456
    - 每个函数， 交给app.use 调用都是中间件 middleware
    - 每个middleware中都能拿到ctx next 等参数
    - 按照顺序执行 从上到下
    - 如果遇到 ctx.response.body 响应数据
        如果不是最后一个 要给next
        最后一个的话， 他会沿着洋葱模型 执行一遍
        不同用户 不同任务 不同中间件需求
        数组 数据库连接中间件 肯定要在路由中间件前面
    - 如果到了最后的一个中间件 任然没有结束的话，他会沿着洋葱模型回溯执行

- koa 路由
    1. app.js 单点入口 模块化
    2. routers 目录 定义路由
        使用 restful-api 名词 + 动词
        /post  GET POST DELEATE PATCH PUT
    3. 路由是作为中间件 启用
        ctx.req  请求行 http 版本号 url method
        多个路由中间件
        如果url method 和当前洋葱模型执行顺序里的路由中间件匹配， 进入控制器函数执行
        不匹配？ next()

- koa view 层
    1. 传统的MVC
        经典的后端架构方案和设计模式
        router -> controller (数据准备， 逻辑) -> views (html)
    2. ctx.render
        ctx上下文环境  = req + res
        省略 response 
        ctx.render = ctx.resopnse.render
    3. views 目录和view层
        配置一下
    4. 使用ejs 模板引擎
        {{}}
        <%= %>
        for
        模板编译后 完整的输出给浏览器
        前后端分离 只有一个挂载点 vue component 动态
        - MVVM 大型项目， 大公司团队协作
            前后端分离更适合 应用打开更快 体验更好 
        - 前后端分离缺点是什么
            SEO 极其差 #root 百度不会解析 js ajax数据
            对于手机app 里 无所谓SEO 体验为先 Mobile First
            掘金 csdn 搜狐 非常在乎SEO 不适合
            难道掘金就要舍弃vue MVVM 回归MVC 吗
            服务器端渲染的vue Nuxt
        - MVC 有点SEO
        - koa-views views 中间件 挂载到app上
            - 配置views 所在
                ctx.render 指定模板引擎的名字
            - 指定模板引擎 ejs pug
                <%= %>
            - 洋葱模型顺序 views 中间件 功能准备型中间件 放在路由中间件前面
        - ctx.render 
            模板在服务器端编译 返回所有的html 对SEO很友好
             爬虫 也是通过发送请求来建立内容分析 curl指令
        - PC 端入口百度
        - 移动端在应用市场 MVVM


- meta viewport
    SEO  要注意meta 标签的使用
    head 里 meta 通常用来丰富页面的信息和属性
    description  
    keywords  content="掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python"
    viewport 用于适配， PC端不用
    移动端 init-scale=1.0 width=device-width user-scalable=no
    乔布斯iPhone开创了移动时代，PC更多  user-scalable 两个手指缩放页面
    1024px pc -> 750 手机小 放大
    现在过时了 Mobile First  user-scalable=no 禁用缩放
    缩放有时候会误操作 触发回到上一页 下一页
    www.taobao.com -> m.taobao.com 301
    PC 一套 nuxt
    mobile SPA

- 静态资源koa处理
    - css js image 静态资源
        - 不归路由（逻辑， 数据库， 服务器端内存等）管 服务器集群
        - 前端写的绝大部分都是静态资源 webpack vite 打包 dist/
            未来会单独放在cdn 服务器 前端缓存
    - 单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 + 缓存 koa-static-cache
        - / 动态服务器路由 首页
        - / 静态服务器 静态服务器中间件放在 路由前面
            / -> 配置的 /public 
        - 时间内， 客户端不用再请求， http 优化的重要理解
            200 第一次
            2... 304 NOT Modified
            maxAge 一定会去服务器在请求 在更新