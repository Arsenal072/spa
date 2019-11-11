var path = require("path")
var webpack = require("webpack")

function resolve(relPath) {
    return path.resolve(__dirname, relPath)
}
module.exports = {
    entry: {
        web: resolve("../src/main.js")
    },
    output: {
        filename: "js/[name].js",
        chunkFilename: "js/[name].[chunkhash].js"
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
    }
}