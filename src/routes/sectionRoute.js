const Router = require('koa-router')
const controller = require('../controllers/sectionController')


const router = new Router()


router.get('/admin/section', controller.allSections)
router.post('/admin/section', controller.createSection)

router.get('/admin/guide/:order', controller.readGuide)
router.patch('/admin/guide/:order', controller.editGuide)

// router.put('/section/:id', controller.homePage)
// router.delete('/section/:id', controller.homePage)


module.exports = router
