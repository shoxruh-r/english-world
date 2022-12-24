const Router = require('koa-router')
const controller = require('../controllers/homeController')


const router = new Router()


router.get('/', controller.homePage)
router.get('/translate', controller.translatePage)
router.post('/translate', controller.translate)
router.get('/learn', controller.learnPage)
router.get('/dictionary', controller.dictionaryPage)


module.exports = router
