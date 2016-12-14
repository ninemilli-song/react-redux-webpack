/**
 * Created by songxg on 16/4/1.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer (webpack(config), {
    publicPath: '/',
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(3001, '127.0.0.1', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:3001');
    });