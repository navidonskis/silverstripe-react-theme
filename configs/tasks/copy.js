'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
};
