var fundebug = require("fundebug-nodejs");
fundebug.apikey="276547f9525f2a39490ab467d63389fbb600520351bf41715cf2a3c31e4a7856";
// fundebug.notify("Test", "Hello Fundebug!");
new Promise(function(resolve,reject){
    reject(123);
})
process.on("unhandledRejection", function(a) {
    console.log("出错信息",a);
});