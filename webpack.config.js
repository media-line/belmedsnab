"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        slider: __dirname + '/dev/components/slider/slider',
        topMenu: __dirname + '/dev/components/top-menu/top-menu',
        iconBlocks: __dirname + '/dev/components/icon-blocks/icon-blocks',
        newsPreview: __dirname + '/dev/components/news-preview/news-preview',
        bottomMenu: __dirname + '/dev/components/bottom-menu/bottom-menu',
        socialButtons: __dirname + '/dev/components/social-buttons/social-buttons',
        sliderPresentation: __dirname + '/dev/components/slider-presentation/slider-presentation',
        breadcrumbs: __dirname + '/dev/components/breadcrumbs/breadcrumbs',
        newsList: __dirname + '/dev/components/news-list/news-list',
        catalogList: __dirname + '/dev/components/catalog-list/catalog-list',
        accurayMap: __dirname + '/dev/components/accuray-map/accuray-map',
        pagination: __dirname + '/dev/components/pagination/pagination',
        
    
        common: __dirname + '/dev/modules/common/common',
        mainpage: __dirname + '/dev/modules/mainpage/mainpage',
        inner: __dirname + '/dev/modules/inner/inner',
        

        presentationPage: __dirname + '/dev/presentation-page',
        newsPage: __dirname + '/dev/news-page',
        catalogPage: __dirname + '/dev/catalog-page',
        accurayPage: __dirname + '/dev/accuray-page',
    }, 
    output: {
        path: __dirname + '/public',
        publicPath: NODE_ENV == 'development' ? '/' : '',
        filename: 'js/[name].js',
        library: ["newbor", "[name]"],
    },
    
    watch: NODE_ENV == 'development',
    
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //minimize: true
                            }
                        }, 
                        "postcss-loader", 
                        "sass-loader",
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                // Or array of paths
                                resources: ['./dev/sass/mixins.scss', './dev/sass/_grid.scss', './dev/sass/variables.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: NODE_ENV == 'development' ? "raw-loader" : 'file-loader?name=[name].[ext]'
            },
        ],
    },
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commonWebpack',
            minChunks: 3,
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }),*/
        new ExtractTextPlugin({filename: "css/[name].css", allChunks: true, disable: NODE_ENV == 'development'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: NODE_ENV
        }),
    ],
    
    resolve: {
        alias: {
            'jquery': require.resolve('jquery'),
        },
    },
    
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dev'
    }
};