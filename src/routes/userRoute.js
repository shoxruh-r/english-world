const Router = require('koa-router')
const controller = require('../controllers/userController')


const router = new Router()


router.get('/test', controller.sample)


module.exports = router
