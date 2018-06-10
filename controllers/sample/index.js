const get = (ctx, next) => {
    const tempData = {
        id: 1,
        value: 'tempValue',
        input: ctx.params.id
    };

    ctx.body = tempData;
    next();
};

module.exports.get = get;