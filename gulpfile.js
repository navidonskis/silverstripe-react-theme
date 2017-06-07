'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./configs/default.config');
const register = require(`./configs/utils/register`);

register(gulp, plugins, config)({
    'lint:scss': 'lint-scss',
    'build:scss': 'build-scss',
    'build:js': 'build-js',
    'build:vendor': 'build-vendor-js',
    'build:svg': 'build-svg',
    'copy': 'copy',
    'watch': 'watch',
    'serve': 'serve'
});

gulp.task('build', gulp.parallel('build:js', 'build:scss', 'build:svg')); // 'copy', 'build:vendor'
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
