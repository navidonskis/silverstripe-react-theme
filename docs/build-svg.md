# SVG `build:svg` task

Add your `*.svg` files into `src/images/svg` to build `src/images/sprite.svg` file. If you need more options for svg task, take a look at `configs/tasks/build-svg.js` configuration file which is basically a plugin of [`svgSprite`](https://www.npmjs.com/package/gulp-svg-sprite).
  
After you add a new file `gulp` will watch of files changes and re-build sprite for you. 