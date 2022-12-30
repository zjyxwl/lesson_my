// http 服务
// 提供  /banners  路由服务
// js 宿主环境  browser  document
//              node  linux  命令执行  http
const http = require('http'); // node js  后端实现

const server = http.createServer(function(req, res) {
    res.end('hello world')
}) // web 服务
server.listen(3000)
console.log('http://localhost:3000')