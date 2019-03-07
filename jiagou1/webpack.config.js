const HtmlWebpackPlugin = require('html-webpack-plugin')
const argv = require('yargs-parser')(process.argv.slice(2))
const _mode = argv.mode || 'development'
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = (_mode==="production"?true:false)
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//这个插件将CSS提取到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。它支持CSS和SourceMaps的随需加载。
//它构建在新的webpack v4特性(模块类型)之上，需要webpack 4才能工作。
//与extract-text-webpack-plugin相比:
// 异步加载
// 没有重复编译(性能)
// 更容易使用
// 特定于CSS
//
const path = require('path');
const  loading={
  html:"加载"
}
//虽然webpack 5可能带有一个内置的CSS最小化器，但对于webpack 4，您需要自带一个CSS最小化器。为了缩小输出，可以使用像optimize-css-assets-webpack-plugin这样的插件。设置优化。最小化器覆盖webpack提供的默认值，所以请确保还指定了JS最小化器:
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const HappyPack = require('happypack');
const smp = new SpeedMeasurePlugin();
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const setTitle = require('node-bash-title');
 setTitle('🍻  Server');  //自定义终端窗口标题title
 var setIterm2Badge = require('set-iterm2-badge');
 var port = '8088';
 setIterm2Badge(port);

let webpackConfig=smp.wrap({
  entry:__dirname+'/src/index.js',
  output:{
    path:__dirname+'/dist',
    filename:"scripts/[name].[contenthash:5].js"
  },
  module:{
    rules: [
        {
          test: /\.css$/,
          use: [
            {
             loader: MiniCssExtractPlugin.loader
            },{
                loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                  }
                }
              ],
            // include: [path.resolve('src')],
            //  // 不会去查找的路径
            // exclude: /node_modules/
        },
        // {
        //   test: /\.js$/,
        //   include: [path.resolve('src')],
        //   exclude: /node_modules/,
        //   // id 后面的内容对应下面
        //   use: 'happypack/loader?id=happybabel'
        // },
        // {
        //   test: /\.less$/,
        //   use: 'happypack/loader?id=styles'
        // },
          // {
          //       test: /\.(png|jpg|gif)$/i,
          //       use: [
          //         {
          //           loader: 'url-loader',
          //           options: {
          //             limit: 8192
          //           }
          //         }
          //       ]
          // },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }

    ]
  },
  devServer:{
    contentBase:path.join(__dirname,'./dist'),
    compress:true,
    port:9000,
    before:function(app,server){
      app.get('/api/list',function(req,res){
        res.json({
          code: 200,
          message: "Hello World"
        })
      })
    },
    after:function(app,server){

    }
  },
  optimization:{
    // noEmitOnErrors:false,
    // nameedChunks
    // moduleIds
    runtimeChunk:{
      name:"runtime"
    }
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: _modeflag?"css/[name].[contenthash:5].css":"css/[name].css",//在文件名前加上style目录
      chunkFilename: _modeflag?"[id].[contenthash:5].css":"[id].css"
    }),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'src/index.html',
      loading, //
      minify:{
        removeComments:_modeflag,
        collapseWhitespace:_modeflag,
      }
    }),
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
      }),
      new WebpackBuildNotifierPlugin({
        title: "MyDemo Webpack Build",
        logo: path.resolve("./img/favicon.png"),
        suppressSuccess: true
      }),
      new ProgressBarPlugin(),
      new VueLoaderPlugin()
    //  new CleanWebpackPlugin(),
      // new HappyPack({
      //    id: 'happybabel',
      //    loaders: ['babel-loader?cacheDirectory'],
      //    // 开启 4 个线程
      //    threads: 4
      //  }),
       // new HappyPack({
       //    id: 'styles',
       //    threads: 2,
       //    loaders: [ 'style-loader', 'css-loader' ]
       //  })
  ],
  resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
});

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
module.exports = merge(_mergeConfig,webpackConfig)
