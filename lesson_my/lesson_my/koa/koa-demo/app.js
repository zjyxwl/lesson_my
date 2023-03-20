const Koa = require('koa')
const config = require('./config/default.js')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const staticCache = require('koa-static-cache')

const signupRouter = require('./routers/signup.js')
const postsRouter = require('./routers/posts.js')

app.use(staticCache(path.join(__dirname, './public'), {dynamic: true}, {
    maxAge: 15*24*60*60
}))
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))  // 放在use routers前面

// 如何记录一个请求所花的时间
// 第一个 计时开始
// app.use(async(ctx, next) => {
//     console.log('中间件1');
//     const start = new Data().getTime();
//     await next();
//     const end = new Data().getTime()
//     console.log('时长:', end - start, ms);
// })

// app.use(async(ctx, next) => {
//     console.log('中间件2');
//     const data = await getData()
//     ctx.body = {data}
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
app.use(postsRouter.routes())

app.listen(config.port)

console.log(`listen on port ${config.port}`);