var path = require("path")
var webpack = require("webpack")
var merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    output: {
        publicPath: "/"
    },
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
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.tpl.html"
        })
    ]
})