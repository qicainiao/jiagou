const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    output: {
        filename: "scripts/[name].[contenthash:5].bundles.js",//hash全部变 chunkhash关联变 contenthash 内容变  增量缓存变一个不影响其他，其他不变
        //公司的Cdn
        publicPath: "/"
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }],
            },
            canPrint: true
        })
    ]
};
