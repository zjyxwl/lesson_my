const Koa = require('koa')
const config = require('./config/default')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
// MVC
const signupRouter = require('./routers/signup')
const signinRouter = require('./routers/signin')
const signoutRouter = require('./routers/signout')
const postRouter = require('./routers/posts')
const session = require('koa-session')
// const MysqlStore = require('koa-mysql-session')

// const sessionMysqlConfig = {
//     user: config.database.USERNAME,
//     password: config.database.PASSWORD,
//     database: config.database.DATABASE,
//     host: config.database.HOST
// }

app.keys = ['some secret hurr'];
const sessionConfig = {
    key: 'USER_SID',
    maxAge: 864000000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    secure: false,
    sameSite:null
}

app.use(session(sessionConfig, app))


app.use(staticCache(path.join(__dirname, './public'), {
    maxAge: 15*24*60*60
}))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(bodyParser({
    formLimit: '1mb'
}))

// 洋葱模型
// 中间件为其服务
// blog 网站 复杂事情
// 一个函数解决一个问题
// app.use((ctx, next) => { // 服务员
//     console.log(1)
//     // 向下传
//     next() // compose
//     console.log(6)
//     // ctx.response.body = 'hello world'
// })
// app.use((ctx, next) => { // 厨师
//     console.log(2)
//     ctx.response.body = '？？？？？'
//     next()
//     console.log(5)
// })
// app.use((ctx, next) => { // 厨师
//     console.log(3)
//     // ctx.response.body = 'hello world'
//     next()
//     console.log(4)
// })

// 如何记录一个请求所花时间
// 第一个 计时开始
// app.use(async (ctx, next) =>{
//     console.log('中间件1')
//     const start = new Date().getTime()
//     await next()
//     const end = new Date().getTime()
//     console.log('花费时间为：', end - start, 'ms')
// })

// app.use(async (ctx, next) => {
//     console.log('中间件2')
//     const data = await getData()
//     ctx.body  = {data}
// })

// const getData = async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 1000)
//     })
//     return 'hello world'
// }

app.use(signupRouter.routes())
app.use(signinRouter.routes())
app.use(signoutRouter.routes())
app.use(postRouter.routes())

app.listen(config.port)

console.log(`listening on port ${config.port}`);