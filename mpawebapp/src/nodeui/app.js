import Koa from 'koa';
import config from  "./config";
import routesInit from "./routes/routesInit";
import router from "koa-simple-router";
import log4js from "log4js";
import errorHandler from './middlewares/errorHandler';

//目前有个问题 执行 npm run server:prod 不编译middlewares目录
//执行 npm run server:dev 嫩编译。 跟gulp-roll plugin有关系 

console.log(" __dirname-->", __dirname);
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/logs/ydlogs.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});

var logger = log4js.getLogger();
const app = new Koa();
errorHandler.error(app,logger);
routesInit.init(app,router);
app.listen(config.port,()=>{
  console.log(`my system listening on ${config.port}`);
});

console.log(111122);
