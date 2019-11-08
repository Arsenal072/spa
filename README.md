# spa
单页面应用
https://www.qinshenxue.com/article/20161118151423.html
#1
在目录下执行npm init -y来创建一个 package.json
<!-- package.json -->
    "devDependencies": {
        "vue": "^2.5.15",
        "vue-loader": "^14.2.1",
        "vue-router": "^3.0.1",
        "vue-template-compiler": "^2.5.15",
        "webpack": "^3.11.0",
        "webpack-dev-server": "^2.11.1"
    },
cnpm i
#2
    |-- package.json
    |-- index.html         // 访问首页
    |-- webpack.config.js  // Webpack 配置文件
    |-- src
        |-- views       // Vue 页面目录
        |-- main.js     // 入口起点
        |-- router.js   // vue-router 配置
        |-- app.vue     // Vue 根组件

--hot：修改代码后，不用自己刷新页面就能看到修改后的结果
--open：启动后自动打开浏览器