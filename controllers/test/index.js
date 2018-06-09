const get = (ctx, next) => {
    const tempData = {
        id: 1,
        value: '걍 임시값'
    };

    ctx.body = 'dd';
    next();
};

const get2 = (ctx) => {
    setTimeout(() => {
        ctx.body += '??';
    }, 1000);
    console.log('??');
};

module.exports.get = get;
module.exports.get2 = get2;