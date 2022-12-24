const googleTranslate = require('translate-google')
const randomWords = require('random-words')
const Section = require('../models/Section')


const homePage = async ctx => {
    await ctx.redirect('/learn')
}


const translatePage = async ctx => {
    await ctx.render('translate')
}


const translate = async ctx => {
    const { from, to, text } = JSON.parse(ctx.request.body)
    const data = await googleTranslate(text, { from, to })
    ctx.body = { data }
}


const dictionaryPage = async ctx => {
    await ctx.render('dictionary')
}


const learnPage = async ctx => {
    const sections = await Section.find()
    await ctx.render('learn', { sections })
}


module.exports = { homePage, translatePage, translate, learnPage, dictionaryPage }
