const Router = require('koa-router')
const controller = require('../controllers/adminController')


const router = new Router()


router.get('/admin', controller.dashboardPage)
router.get('/admin/login', controller.loginPage)
router.post('/admin/login', controller.login)


module.exports = router
