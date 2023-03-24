- MVC
    - Model 数据层
    - View 视图层
    职责分离 MV 不能直接通信
    Control 来负责 逻辑计算 参数的校验 中间计算吗用户session
    路由 后端路由， 用户据从那条路哪个method进来， 交给control

- KOA
    极简的node 开发框架
    - context = req + res
    - 中间件
        函数
## 后端思维
    MVVM -> MVC
    view html 有完整的html + DOM(原生js jquery)
- 3000
    后端安全的一部分？
    配置化

- 洋葱模型
    koa 提供服务和架构的本质， node五福器编程的简单
    123456
    - 每个函数交给app.use 调用都是中间剑 middleware
    - 每个middleware中都能拿到 ctx next 等参数
    - 如果遇到 ctx.response.body 响应数据
        如果不是最后一个， 要给next()
        最后一个的话, 沿着洋葱模型执行一遍
        不同的用户， 不同的任务，不同的中间件需求
        数组 数据库链接中间件 肯定要在路由中间件前面
    - 如果到了最后一个中间件，任然没有结束的话，沿着洋葱模型回溯

- koa 路由
    1. app.js 单点入口 模块化，
    2. routers 目录 定义路由
        使用restful-api 名词 + 动词
        /posts GET POST DELETE PATCH PUT
    3. 路由是作为中间件 启用
        ctx.req 请求头 http 版本号 url method
        多个路由中间件
        如果当前路由中间件
        如果url method 和当前洋葱模型执行顺序里的路由中间匹配进入控制器函数执行
        不匹配呢？ next

- koa view 层
    1. 传统的MVC
        经典的后端架构方案和设计模式
        router -> controller（数据准备， 逻辑） -> views （html）
    2. ctx.render
        ctx 上下文环境 req + res
        省略 response
        ctx.render = ctx.response.render
    3. views 目录和view层
        配置一下
    4. 使用ejs 模板引擎
        {{}}
        <%= %>
        for
        模板编译后 完整的输出给浏览器
        前后端分离 只有一个挂载点 vue
        component 动态
        - MVVM 大型项目，大公司团队协作
            前后端分离 更适合 应用打开更快， 体验更好，  不会白一下
        - 前后端分离缺点
            SEO 极差 #root      百度 不会解析 js ajax 数据
            对于手机app 里 无所谓SEO 的 体验为先 Mobile First
            掘金 csdn 搜狐 非常在乎 SEO 不适合
            难道 掘金就要舍弃vue MVVM 回归MVC 吗？
            服务器端渲染的VUE Nuxt
        - MVC 优点 SEO
        - koa-views views 中间件 挂载在app上
            - 配置 views 所在
                ctx.render 指定模板的名字
            - 指定模板引擎 ejs pug
                <%= %>
            - 洋葱模型顺序 views 中间 功能准备型中间件 放置在路由中间件前面
        - ctx.render
            模板在服务器端编译 返回所有的 html 对SEO 很友好
                爬虫 也是通过发送请求 来建立内容分析 curl
        - PC 端入口在百度
        - 移动端在应用市场 MVVM

- meta viewport
    SEO 要注意meta 标签的使用
    head 里 meta 通常用来丰富页面的信息和属性
    description
    keywords
    viewport 用于适配 PC 端不用，
    移动端 init-scale=1.0 width=device-width user-scalable=no
    乔布斯 iphone 开创了移动时代， pc更多， user-scalable两个手指头缩放页面
    1024px pc -> 750 手机很小 可以放大
    现在过时了 Mobile First user-scalable=no 禁用缩放
    缩放有时候会误操作 触发回到上一页  下一页
    www.taobao.com -> m.taobao.com 301
    pc 一套 nuxt
    mobile SPA
    
- 静态资源koa 处理
    - css js image 静态资源
        - 不归路由（逻辑， 数据库， 服务器端内存等）管    服务器集群中
        - 前端写的绝大部分都是静态资源 webpack vite 打包 dist/
            未来会单独放在cdn 服务器 前端缓存
    - 单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 static + 缓存 cache koa-static-cache
        - / 动态路由服务器路由， 首页
        - / 静态服务器  静态服务器中间件放在 路由前面
            / -> 配置的 /public
        - 时间内， 客户端不用再请求， http 优化的重要理解
            200 第一次
            2... 304 Not Modifiled
            maxAge 一定会去服务器再去请求，再更新
    
- 登入的用户体验
    - keyup 事件 enter 提交 手机 Enter 虚拟键盘
    - 做好校验
        前端做了（用户体验， 即使提醒）， 后端还要做（js可以禁用，后端不信任前端传的任何东西） 未来数据安全
        密码重复 在前端，后端都要做 ？ 后端对数据安全负第一责任

- 文件对象是html5 的重大功能
    - 提供了File对象
        文件按在上传到服务器之前， 就可以访问到本地的文件 类型 大小 等
    - 提供了FileReader对象
        异步的从硬盘读取内容到内存， 一url， base64 blob
        看到图片， 上传
        文件大小 比较打 用户要等好久才能上传完，吗如果没有交互体现正在上传的用户会很焦虑
    
- bodyParser 中间件
    POST 请求和GET 请求不一样
    GET 查询参数 在请求行 就以到位
    POST 请求体，(请求头信息有length) 分段传输 路由中间件之前要加 请求体数据包收集中间件
    bodyParser await 收集 == length next()
    1 next() 2

- node 做后端
    优点是 异步  与其他后端语言不一样 性能好， no blocking
    一台服务器， 上限是同时在线5000人， 并发nginx/tomcat
    php/Java/python 同步的 blocking 在sql请求(I/O)耗时任务中 占据线程
    node 异步的， 有event loop 在sql请求(I/O)耗时任务中 进入 event loop
    nginx/tomcat 线程就会被释放 不会阻塞 no blocking
    省掉很多服务器， 支持高并发
    java c++ 多线程
    node 单线程 跟法师一样脆 服务器会崩 所有用户都不响应 try catch
    pm2 进程管理工具
    
- 文件上传
    1. 上传到服务器端
        哪个文件夹？ static-catch 静态服务器, 缓存 /public/images/
    2. 可以访问的
        静态服务器
    3. fs 模块 写入

- mysql 业务处理方式
    1. MVC 的 model 层
        lib/mysql.js 简版
        在控制器中调用
    2. 数据库驱动 mysql2 翻译
        驱动mysql 为程序工作 I/O 
        createPool
        getConnection 连接数据库
        release 断开数据库
    3. 封装了通用的query 方法 sql data
    4. 提供各种业务 sql 封装函数
        - 检测users表是否有某用户 select count(*)
        - 插入一条用户记录 insert into

- 登入功能的细节
    GET / signin 表单
    验证表单
    ajax 提交表单 POST / signin {}
    bodyparser post 表单
    后台登录路由
    后台登录控制器
    后端验证参数
    sql 查询操作
    种下cookie session

    http 带上 cookie session 解析出相应的对象

- cookie session jwt
1. cookie 每次都会http带上
    文本 不能呢太大  ，影响性能
2. cookie 在客户端 和后端 都可写可读
3. 登录时， 服务器 ctx.session 同时， 自动设置cookie
USER_SID = session_id 值
    session(绘画对象 id name cat 大一点， 后端内存中) 依赖于 cookie 而生
4. session 中间件 会使用cookie USER_SID 解析 session_id
    去session 池子里 找到属于用户的session 对象 ctx.session
5. 任何需要鉴权的地方，ctx.session 有没有值就可以了

- cookie 数据存放在用户的浏览器上， session数据放在服务器上
- cookie 很不安全 HttpOnlyn true js 代码里拿不到 http 还是会带上
    domain + path 同源策略 / 任何路径
    Expires 自动过期
    SameSite
    为了安全， 考虑session
- session 在一定时间内保存在服务器上，占内存， 多了会影响服务器端性能
- cookie 单个 不能超过 4k ,不能超过20个 cookie

- 为什么jwt 这种方案， 新的主流？
    1. cookie 不安全，
    2. cookie 性能不好
    3. token 小,生成json对象 session要那么多空间

- 关系型数据库
    MYSQL SQLServer  表关联
    USERS 1 -> n  Posts
    Posts 1 -> n  Comments
    Key  Primary Key  Uniq Key  Foreign Key 
    Key 组合    查询业务的频繁度
    1500 页面（硬盘） 没有索引  从第一页找到最后一页
    索引 内存 先查五页 索引 
- NOSQL
- 数据的冗余
    name 有利于列表页单表查询 适当冗余

- 中间件登录检测方案
    1. 在后端项目框架中 middlewares 是自定义组件间的所在
    2. 登录校验也可以和 session bodyParser... 可以视为一个独立的中间件， 在路由发生时， 在controller 前面
        '/path', checkLogin, contriller
        数组 有顺序 放一堆
    3. 有利于复用

- 内容安全
    1. 不要相信用户的输入
    2. 用户可能输入js 代码 甚至是sql
        cookie 盗用
    3. <script> 删除 转义