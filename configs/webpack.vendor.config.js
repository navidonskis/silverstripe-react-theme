const path = require('path');
const webpack = require('webpack-stream').webpack;
const config = require('./default.config');

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    output: {
        filename: config.paths.vendor.bundleName
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false,
            minimize: false
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
