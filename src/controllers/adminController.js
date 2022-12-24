const ADMIN = {
    email: "shokhrukh.busy@gmail.com",
    password: "test"
}

const VIEW_OPTIONS = { layout: 'admin/layout' }


const login = async ctx => {
    const { email, password } = ctx.request.body

    if (email === ADMIN.email && password === ADMIN.password) {
        await ctx.redirect('/admin')
    } else {
        await ctx.render('admin/login', VIEW_OPTIONS)
    }
}


const loginPage = async ctx => {
    await ctx.render('admin/login', VIEW_OPTIONS)
}


const dashboardPage = async ctx => {
    if (true) {
        await ctx.redirect('/admin/section')
    } else {

    }
}


module.exports = { login, loginPage, dashboardPage }
