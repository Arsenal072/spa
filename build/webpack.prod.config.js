var path = require("path")
var webpack = require("webpack")
var merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var baseWebpackConfig = require("./webpack.base.config")
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader"]
                            }),
                            stylus: ExtractTextPlugin.extract({
                                use: [
                                    "css-loader",
                                    "postcss-loader",
                                    "stylus-loader"
                                ]
                            })
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader"]
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "stylus-loader"]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin(),
        // 生成入口首页
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `../dist/web.html`),
            template: 'index.html',
            chunks: ['manifest', 'vendor', 'web-vendor', 'web'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, `../dist/admin.html`),
            template: 'index.html',
            chunks: ['manifest', 'vendor', 'admin-vendor', 'admin'],
            inject: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function(module, count) {
        //         return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     chunks: ['vendor']
        // })
        // css提取
        new ExtractTextPlugin({
            allChunks: true,
            filename: "css/[name].css?[contenthash:8]"
        }),
        // js提取
        new webpack.optimize.CommonsChunkPlugin({
            name: 'web-vendor',
            chunks: ['web'],
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'admin-vendor',
            chunks: ['admin'],
            minChunks: function (module) {
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['admin-vendor', 'web-vendor']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
})