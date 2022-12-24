const Koa = require('koa')
const { koaBody } = require('koa-body')
const render = require('koa-ejs')
const serve = require('koa-static')
const path = require('path')
const mongoose = require('mongoose')
const homeRouter = require('./src/routes/homeRoute')
const adminRouter = require('./src/routes/adminRoute')
const sectionRouter = require('./src/routes/sectionRoute')
const phraseRoute = require('./src/routes/phraseRoute')

require('dotenv').config()

const app = new Koa()

render(app, {
    root: path.join(__dirname, './src/views'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: false,
})

// Middlewares
app.use(koaBody())

// Application definition
app.use(homeRouter.routes())
app.use(adminRouter.routes())
app.use(sectionRouter.routes())
app.use(phraseRoute.routes())

// Static files (CSS, JavaScript, Images)
app.use(serve(path.join(__dirname, './src/public')))

// Database
mongoose.set('strictQuery', true)
mongoose.connect(process.env.ATLAS_URI, () => {
    app.listen(3000, async () => {
        console.log("Database connected.")
    })
})
