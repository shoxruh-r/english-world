const Router = require('koa-router')
const controller = require('../controllers/phraseController')


const router = new Router()


router.post('/admin/phrase/', controller.createPhrase)
router.post('/admin/phrase/many', controller.insertManyPhrase)
router.delete('/admin/phrase/:id', controller.deletePhrase)


module.exports = router
