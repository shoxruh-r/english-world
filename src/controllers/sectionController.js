const Section = require('../models/Section')


const VIEW_OPTIONS = { layout: 'admin/layout' }


const createSection = async ctx => {
    const section = new Section(ctx.request.body)
    await section.save()
    await ctx.redirect('/admin/section')
}


const updateSection = async ctx => {
    await Section.findOneAndUpdate({ order: 1 }, { description: 'Asosiy iboralarni biling, qayerdan ekanligingizni ayting' })
}
updateSection()


const allSections = async ctx => {
    VIEW_OPTIONS.sections = await Section.find()
    await ctx.render('admin/section', VIEW_OPTIONS)
}


const deleteSection = async ctx => {
    const { id } = ctx.params
    await Section.findByIdAndDelete(id)
    ctx.response.status = 200
}


const readGuide = async ctx => {
    const { order } = ctx.params
    const data = await Section.findOne({ order }, { guide: 1 })
    VIEW_OPTIONS.guide = data.guide
    await ctx.render('/admin/guide', VIEW_OPTIONS)
}


const editGuide = async ctx => {
    try {
        console.log(ctx.request.body)
        const { order } = ctx.params
        Section.findOneAndUpdate({ order }, { $push: { guide: ctx.request.body } }, (error, data) => {
            console.log(error)
            console.log(data)
        })
        // ctx.response.status = 200
    } catch (error) {
        ctx.body = error
    }
}


module.exports = { createSection, allSections, editGuide, readGuide }
