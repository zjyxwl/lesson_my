const userModel = require('../lib/mysql.js')
const moment = require('moment')
const md = require('markdown-it')()
const checkLogin = require('../middlewares/check').checkLogin

exports.getPosts = async (ctx, next) => {
    // console.log(ctx.session, '//////')
    // ctx.response.body = '文章'
    await ctx.render('posts', {
        session: ctx.session
    })
}

exports.getSinglePosts = async (ctx, next) => {
    let postId = ctx.params.postId;
    const result = await userModel.findDataById(postId)
    await userModel.updatePostPv(postId)
    const commentsCountResult = await userModel.findCommentsCountById(postId)
    // ctx.body = {
    //     user: ctx.session, 
    //     posts: result[0],
    //     commentsLength: commentsCountResult[0].count
    // }
    await ctx.render('sPost', {
        session: ctx.session,
        posts: result[0],
        commentsLength: commentsCountResult[0].count
    }) 
}

exports.getCreate = async (ctx, next) => {
    // 登录校验  中间件
    await ctx.render('create', {
        session: ctx.session
    })
}


exports.postCreate = async (ctx, next) => {
    // console.log(ctx.session, '/////');
    let { title, content } = ctx.request.body,
    { id, user:name }= ctx.session,
    time = moment().format('YYYY-MM-DD HH:mm:ss');
    const userResult = await userModel.findDataByName(ctx.session.user)
    const avatar = userResult[0]['avatar']
    // JS 攻击 SQL 注入  转译 安全  &lt html 显示没问题
    title = title.replace(/[<">']/g, (target) => {
        return {
            '<': '&lt;',
            '>': '&gt;',
            '"': '$quot;',
            "'": "&#39;"
        }[target]
    })
    content = content.replace(/[<">']/g, (target) => {
        return {
            '<': '&lt;',
            '>': '&gt;',
            '"': '$quot;',
            "'": "&#39;"
        }[target]
    })

    await userModel.insertPost([name, title, content, md.render(content),
    id, time, avatar])
    ctx.body = {
        code: 200,
        message: '发表文章成功'
    }
}