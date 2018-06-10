const Router = require('koa-router');
const router = new Router();

const apis = require('./apis');

router.use('/api', apis.sample.routes());

const initRouters = app => {
    app.use(router.routes());
};

module.exports.initRouters = initRouters;