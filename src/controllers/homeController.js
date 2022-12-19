const googleTranslate = require('translate-google')


const homePage = async ctx => {
    await ctx.render('index')
}


const translatePage = async ctx => {
    await ctx.render('translate')
}


const translate = async ctx => {
    console.log(ctx.request.body)
    const { from, to, text } = JSON.parse(ctx.request.body)
    const data = await googleTranslate(text, { from, to })
    ctx.body = { data }
}


module.exports = { homePage, translatePage, translate }
