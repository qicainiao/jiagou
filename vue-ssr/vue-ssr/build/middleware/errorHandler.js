'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const errorHandler = {
    error(app) {
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.log('errcode', err);
                ctx.status = err.status || 500;
                ctx.body = await ctx.render('500', { data: err.stack });
            }
        });
        app.use(async (ctx, next) => {
            await next();
            if (404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = await ctx.render('404');
        });
    }
};
exports.default = errorHandler;