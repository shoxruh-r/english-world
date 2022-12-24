const Phrase = require('../models/Phrase')


const createPhrase = async ctx => {
    try {
        let phrase = new Phrase(ctx.request.body)
        phrase = await phrase.save()
        ctx.body = phrase._id
    } catch (error) {
        ctx.body = error
    }
}


const insertManyPhrase = async ctx => {
    try {
        let phrases = await Phrase.insertMany(ctx.request.body)
        ctx.body = phrases.map(phrase => phrase._id)
    } catch (error) {
        ctx.body = error
    }
}


const deletePhrase = async ctx => {
    const { id } = ctx.params
    await Phrase.findByIdAndDelete(id)
    ctx.response.status = 200
}


module.exports = { createPhrase, deletePhrase, insertManyPhrase }
