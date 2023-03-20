const routers = require('koa-router')()
const controller = require('../controller/c-post')
// 
routers.get('./post', controller.getPosts)

module.exports = routers