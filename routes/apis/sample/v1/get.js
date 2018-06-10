const Router = require('koa-router');

const router = new Router();

const controllers = require('../../../../controllers');
const sampleController = controllers.sampleController;

router.get('/:id', sampleController.get);

module.exports = router;