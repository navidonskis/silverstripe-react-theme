# SilverStripe React Starter Theme

This is React Starter Kit using gulp transpiler for SilverStripe CMS.

## Usage

Run `npm install` to fetch all dependencies. Open `configs/default.config.js` to configure by your opinions. Then run command `gulp` to listen your changes.

Available `gulp` parameters (tasks):

| Parameter | Description |
|-----------|-------------|
| `build` | build SASS, Javascript's, Vendors, SVG's |
| `build:scss` | search for the changes and building the SASS files. If you want to create as new styles file, just add `file-name.scss` without `_` (`_file-name.scss`). Task will also use `lint:scss` task to ensure SASS lint rules. |
| `build:js` | task will check `src/js/index.jsx` file and compare with bundle. Use `ES6` and `React` to import components into file. |
| `build:vendor` | task are the same like `build:js` but this one can be add a set of collections of dependencies. In the `configs/default.config.js` `paths.vendor.dependencies`. |
| `build:svg` | add your `svg` images to `src/images/svg` and run this command to build `sprite.svg` file which will be at `assets/images/`. |
| `watch` | task will watch `build:js`, `build:scss`, `build:svg` tasks (file changes) and re-run. |
| `serve` | task will serve proxy and opens in the browser. To setup your project - open `configs/default.config.js` and change `browserSync.serve` if you will using files as `html` example, or `browserSync.proxy` within you host name of the SilverStripe project. |
| `default` | default task or empty `gulp` command will run `build` and `watch`, `serve` tasks. |

