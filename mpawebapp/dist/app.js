"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _routesInit = require("./routes/routesInit");

var _routesInit2 = _interopRequireDefault(_routesInit);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require("./middlewares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(" __dirname-->", __dirname);

_log4js2.default.configure({
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

var logger = _log4js2.default.getLogger();

const app = new _koa2.default();

_errorHandler2.default.error(app, logger);

_routesInit2.default.init(app, _koaSimpleRouter2.default);

app.listen(_config2.default.port, () => {
  console.log(`my system listening on ${_config2.default.port}`);
});
console.log(111122);