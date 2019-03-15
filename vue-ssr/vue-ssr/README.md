# 京程一灯Vue2+KOA2+Webpack3

------

本项目主要从0开始构建前端集成开发环境，Follow me ~

> * npm run start   启动服务
> * npm run test    启动测试
> * npm run build   启动编译

![cmd-markdown-logo](https://wiki.jenkins.io/download/attachments/78676506/docker-jenkins.png)

------

## 辅助第三方的库和介绍

本项目所涵盖质量量巨大，请酌情根据项目需要增减

### 1. Git 主页介绍 [点我抵达](https://alexkuz.github.io/webpack-chart/)

- [ ] 发到到NPM仓库并发布为Yo包
- [ ] 完成对Nginx的配置代理
- [ ] 集成到Jenkins或Travis CI
- [x] 完成Vue SSR渲染机制
- [x] 完成Vue HotRelaod开发阶段的部署
- [x] 完成了自动化功能测试配置
- [x] 完成了后端容错机制的运用

### 2. WebPack Chart [点我抵达](https://alexkuz.github.io/webpack-chart/)]

------
src
├─webapp
|   ├─.DS_Store
|   ├─App.vue
|   ├─app.js
|   ├─entry-client.js
|   ├─entry-server.js
|   ├─index.html
|   ├─indexdev.html
|   ├─vuex
|   |  ├─actions.js
|   |  ├─getters.js
|   |  └store.js
|   ├─router
|   |   └index.js
|   ├─libs
|   |  └ydlib.js
|   ├─error
|   |   ├─404.html
|   |   └500.html
|   ├─components
|   |     ├─About.vue
|   |     ├─Counter.vue
|   |     ├─Home.vue
|   |     ├─Topics.vue
|   |     ├─test
|   |     |  ├─Test.css
|   |     |  ├─Test.js
|   |     |  └Test.vue
|   ├─assets
|   |   └logo.png
├─nodeuii
|    ├─.DS_Store
|    ├─app.js
|    ├─models
|    |   └indexModel.js
|    ├─middleware
|    |     └errorHandler.js
|    ├─controllers
|    |      ├─controllerInit.js
|    |      └indexController.js
|    ├─config
|    |   ├─config.js
|    |   └local.js

总目录
├─config
|   ├─.DS_Store
|   ├─vue-loader.config.js
|   ├─webpack.conf.js
|   ├─webpack.dev.js
|   ├─webpack.prod.js
|   └webpack.server.js
├─bin
|  ├─chromedriver
|  ├─geckodriver
|  ├─index.js
|  └selenium-server-standalone-3.5.2.jar

如果你想了解更多 请联系我 yuanzhijia@yidengxuetang.com.