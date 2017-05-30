'use strict';

module.exports = (gulp, plugins, config) => (tasks) => {
    for (let task in tasks) {
        gulp.task(task, require(`../tasks/${tasks[task]}`)(gulp, plugins, config));
    }
};
