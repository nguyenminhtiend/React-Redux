var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:63342/React-Redux/build/'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: "style!css!"},
            { test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
            { test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file' }
        ]
    }
};