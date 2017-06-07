'use strict';

const path = require('path');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.vendor.config');

module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.paths.vendor.dependencies)
        .pipe(webpackStream(webpackConfig))
        .pipe(plugins.rename(config.paths.vendor.bundleName))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.js}`));
};
