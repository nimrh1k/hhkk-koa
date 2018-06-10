const Koa = require('koa');
const app = new Koa();
const routes = require('./routes');

routes.initRouters(app);

app.listen(10000, () => {
    console.log('Koa is running!!');
});

module.exports = app;