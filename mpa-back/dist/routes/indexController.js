"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexModel = require("../models/IndexModel.js");

var _IndexModel2 = _interopRequireDefault(_IndexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
  indexAction() {
    return async (ctx, next) => {
      const indexmodel = new _IndexModel2.default();
      const result = await indexmodel.getData(); // const result2 = result + data;

      ctx.body = await ctx.render("index", {
        data: result
      });
    };
  },

  testAction() {
    return async (ctx, next) => {
      ctx.body = await ctx.render("index/test.html");
    };
  }

};
exports.default = indexController;