const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, '../src/js'),
            exclude: /node_modules/
        }]
    },
    plugins: [
        // uncomment those lines for production
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false},
        //     comments: false,
        //     minimize: false
        // }),
        // new webpack.optimize.AggressiveMergingPlugin()
    ]
};
