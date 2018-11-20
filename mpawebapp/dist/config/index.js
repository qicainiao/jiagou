'use strict';

var lodash = require('lodash');
var path = require('path');

// import path from "path";
let config = {
    env: "production",
    staticDir: path.join(__dirname,"..","assets"),
    viewDir: path.join(__dirname,"..","views"),
};

{
    const proConfig = {
        port: 80
    };
    config = lodash.extend(config, proConfig);
}

console.log("111");
var config$1 = config;

module.exports = config$1;
