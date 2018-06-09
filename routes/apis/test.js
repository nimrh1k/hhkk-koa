const Router = require('koa-router');

const router = new Router();

const testController = require('../../controllers/test');

router.get('/', testController.get);
router.get('/', testController.get2);

module.exports = router;