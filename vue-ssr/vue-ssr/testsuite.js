const phantomcss = require('phantomcss');
casper.
start('http://map.qq.com/m/').
then(function() {
    phantomcss.screenshot('#replaceBodyAsContainer', 'mapqq');
});
// phantomcss.init({
//     captureWaitEnabled: true,
//     screenshotRoot: './test/csssuite/baseline',
//     mismatchTolerance: 0.05,
//     comparisonResultRoot: './reports/csssuite',
//     prefixCount: true
// });
casper.run();