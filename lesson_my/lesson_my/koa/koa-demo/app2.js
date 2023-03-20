const Koa = require('koa')
const config = require('./config/default.js')
const app = new Koa()
// 洋葱模型
// 中间件为其服务
// blog 网站复杂事情
// 一个函数解决一个问题
app.use((ctx, next) => {
    console.log(1);
    // 向下传递
    next()
    console.log(6);
    ctx.response.body = 'hello'
})
app.use((ctx, next) => {
    console.log(2);
    next()
    console.log(5);
})
app.use((ctx, next) => {
    console.log(3);
    // ctx.response.body = 'hello'
    next()
    console.log(4);
})

app.listen(config.port)

console.log('listen on port ${config.port}');