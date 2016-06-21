var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: APP_DIR + '/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/build/'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loaders: ['babel']
            },
            {
                test: /\.css$/,
                loader: "style!css!"
            },
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                loader: 'file'
            }
        ]
    }
};