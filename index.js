const Koa = require('koa')
const { koaBody } = require('koa-body')
const render = require('koa-ejs')
const serve = require('koa-static')
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

app.use(serve('./src/public'))

app.listen(3000)
