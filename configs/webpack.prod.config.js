const path = require('path');
const webpack = require('webpack-stream').webpack;
const config = require('./default.config');

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    output: {
        filename: config.output.jsBundleName
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, '../src/js'),
            exclude: /node_modules/
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
