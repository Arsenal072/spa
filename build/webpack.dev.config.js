var path = require("path")
var webpack = require("webpack")
var merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        // 生成入口首页
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `../dist/web/index.html`),
            template: 'index.html',
            chunks: ['manifest', 'vendor', 'web-vendor', 'web'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `../dist/admin/index.html`),
            template: 'index.html',
            chunks: ['manifest', 'vendor', 'admin-vendor', 'admin'],
            inject: true
        }),
    ]
})