const Router = require('koa-router');

const router = new Router();

const get = require('./v1/get');

router.use('/sample/v1', get.routes());

module.exports = router;