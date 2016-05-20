/**
 * Created by songxg on 16/3/30.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: getEntrySources('./app/main.js'),
    output: {
        path: process.env.NODE_ENV == 'production' ? __dirname + '/release/js' : __dirname,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                loader: getCSSLoader()
            },
            {
                test: /\.jsx?$/,
                //must us path.jon(), or throw error like this: Uncaught TypeError: Cannot read property 'NODE_ENV' of undefined
                exclude: path.join(__dirname, '/node_modules'),
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015'
                ]
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                //solve the problem when import bootstrap less into the webpack has happen.
                //###ex: ERROR in ./app/css/fonts/glyphicons-halflings-regular.svg
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: getPluginsSource()
}

//定义生产环境、开发环境的配置
function getEntrySources(sources) {
    if (process.env.NODE_ENV == 'production') {
        //webpack code splitting
        return {
            app: sources,
            vendor: ['react', 'react-dom', 'react-redux']
        };
    }
    else {
        var list = [];
        list.push(sources);
        //hot loader
        list.push('webpack-dev-server/client?http://127.0.0.1:3001');
        list.push('webpack/hot/only-dev-server');

        return list;
    }
}

//定义生产环境、开发环境的插件
function getPluginsSource() {
    if (process.env.NODE_ENV == 'production') {
        return [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("production")
                }
            }),
            //extract js lib to vendor.js
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new ExtractTextPlugin('../css/main.css')
        ];
    }
    else {
        return [
            new webpack.HotModuleReplacementPlugin(),   //hot loader plugin
            new webpack.NoErrorsPlugin(),
        ];
    }
}

//define the production environment and develop environment css loader
function getCSSLoader () {
    if (process.env.NODE_ENV == 'production') {
        return ExtractTextPlugin.extract('style', 'css!less');
    }
    else {
        return 'style!css!less';
    }
}