module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.sass)
    .pipe(plugins.scssLint({
      config: config.paths.scsslint
    }));
};
