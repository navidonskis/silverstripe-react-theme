'use strict';

const bs = require('browser-sync');

module.exports = (gulp, plugins, config) => () => {
    bs.init(config.browserSync);
    bs.watch(`${config.paths.html}/**/*.*`).on('change', bs.reload);
};
