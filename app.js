const Koa = require('koa');
const app = new Koa();

const { commonMiddels, middels } = require('./middles');

// use middlewares

// load Router

app.listen(10000, () => {
    console.log('Koa is running!!');
});