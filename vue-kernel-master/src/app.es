'use strict';
require("babel-core/register");
require("babel-polyfill");
import Koa from 'koa';
import convert from 'koa-convert'; //koa1 转换器
import serve from 'koa-static';
import router from 'koa-simple-router';
import path from 'path';
import config from './config/config';
import render from 'koa-swig';
import co from 'co';
// import log4js  from 'koa-log4';
import errorHandler from './Libs/errorHandler';
import controllers from './Controllers/controllerInit';

// import webpackDevServer from 'koa-webpack-dev';
const app = new Koa();
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false
}));
errorHandler.error(app); //处理页面错误的处理句柄
// app.use(convert(webpackDevServer({
//     config: config.webpackConf
// })));
controllers.getAllrouters(app, router); //初始化controllers
app.use(serve(config.staticDir)); // 静态资源文件
// app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }));
//监听端口🐂😊
app.listen(config.port);
console.log('ydVueSystem listening on port %s', config.port);
 process.env.NODE_ENV = "development"; //production
module.exports = app;