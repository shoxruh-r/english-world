const Section = require('../models/Section')


const VIEW_OPTIONS = { layout: 'admin/layout' }


const createSection = async ctx => {
    const section = new Section(ctx.request.body)
    await section.save()
    await ctx.redirect('/admin/section')
}


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
        console.log(typeof ctx.request.body)
        const { order } = ctx.params
        await Section.update({ order }, null, ctx.request.body)
        ctx.response.status = 200
    } catch (error) {
        ctx.body = error
    }
}


module.exports = { createSection, allSections, editGuide, readGuide }
