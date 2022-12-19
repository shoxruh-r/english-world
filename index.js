const Koa = require('koa')
const { koaBody } = require('koa-body')
const render = require('koa-ejs')
const path = require('path')
const homeRouter = require('./src/routes/homeRoute')


const app = new Koa()

app.use(koaBody())

render(app, {
    root: path.join(__dirname, './src/views'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: false,
})

// Routes
app.use(homeRouter.routes())


app.listen(3000)
