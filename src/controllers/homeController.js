const googleTranslate = require('translate-google')
const randomWords = require('random-words')


const homePage = async ctx => {
    await ctx.render('index')
}


const translatePage = async ctx => {
    await ctx.render('translate')
}


const translate = async ctx => {
    const { from, to, text } = JSON.parse(ctx.request.body)
    const data = await googleTranslate(text, { from, to })
    ctx.body = { data }
}


const listeningPage = async ctx => {
    await ctx.render('listening', { word: randomWords() })
}


module.exports = { homePage, translatePage, translate, listeningPage }
