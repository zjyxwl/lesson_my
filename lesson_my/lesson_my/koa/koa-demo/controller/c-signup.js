exports.getSignup = async ctx => {
    // ctx.response.body = '注册'
    let data = {
        title: '注册'
    }
    await ctx.render('signup', data)
}

exports.postSignup = async ctx => {
    // model 

}