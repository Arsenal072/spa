var path = require("path")
var webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件
function resolve(relPath) {
    return path.resolve(__dirname, relPath)
}
module.exports = {
    entry: {
        web: resolve("../src/web/main.js"),
        admin: resolve('../src/admin/main.js')
    },
    output: {
        path: resolve('../dist'),
        filename: "[name].js",
        chunkFilename: "[name][chunkhash].js",
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    plugins: ['syntax-dynamic-import']
                },
                include: [resolve("../src")]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "images/[name].[hash:7].[ext]"
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "fonts/[name].[hash:7].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), //实例化，参数为目录
    ]
}