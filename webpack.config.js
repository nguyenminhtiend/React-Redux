var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
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
            }
        ]
    },
};