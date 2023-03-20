const ruoter = require('koa-router')()  // 路由对象
// 控制权交给controll 层
const controller = require('../controller/c-signup.js')
ruoter.get('/signup', controller.getSignup)
ruoter.post('/signup', controller.postSignup)

module.exports = ruoter