'use strict';


const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config');

module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.paths.js)
        .pipe(webpackStream(webpackConfig))
        .pipe(plugins.rename(config.output.jsBundleName))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.js}`))
};
