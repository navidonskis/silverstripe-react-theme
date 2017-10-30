# SilverStripe React Starter Theme

This is React Starter Kit using gulp transpiler for SilverStripe CMS.

## Installation

```bash
# run command to fetch all dependencies
npm install
```

## Configuration

Open [`configs/default.config.js`](configs/default.config.js#L32) file to configurate your project. Most important is `browserSync` options of proxy target, in the example by default is `http://your-app.dev`. So set your own by your host name.

Other options for SASS and Javascript check individually on the doc's page (see `usage` section).

## Usage

Run command `gulp` to listen your changes.

Available `gulp` parameters (tasks):

| Parameter | Description |
|-----------|-------------|
| `build` | build SASS, Javascript's, Vendors, SVG's |
| [`build:scss`](docs/build-scss.md) | search for the changes and building the SASS files. If you want to create as new styles file, just add `file-name.scss` without `_` (`_file-name.scss`). Task will also use `lint:scss` task to ensure SASS lint rules. |
| [`build:js`](docs/build-js.md) | task will check `src/js/index.js` file and compare with bundle. Use `ES6` and `React` to import components into file. |
| `build:js:prod` | task is identically to `build:js` but minify your javascript code into `app.min.js` file. |
| [`build:vendor`](docs/vendor.md) | task are the same like `build:js` but this one can be add a set of collections of dependencies in the `configs/default.config.js` `paths.vendor.dependencies`. |
| [`build:svg`](docs/build-svg.md) | add your `svg` images to `src/images/svg` and run this command to build `sprite.svg` file which will be at `assets/images/`. |
| `watch` | task will watch `build:js`, `build:scss`, `build:svg` tasks (file changes) and re-run. |
| `serve` | task will serve proxy and opens in the browser. To setup your project - open `configs/default.config.js` and change `browserSync.serve` if you will using files as `html` or `browserSync.proxy` within your host name of the SilverStripe project instead. |
| `default` | default task or empty `gulp` command will run `build` and `watch`, `serve` tasks. |

## Package structure

```
    assets/ # dist files which can be include via Requirements
    configs/ # gulp configuration
    └───tasks/ # all gulp tasks
    └───utils/ # utilities for gulp configuration
    │   default.config.js # package configuration file for the gulp (paths, filenames, etc)
    │   webpack.config.js # default javascript loader settings
    │   webpack.vendor.config.js # default vendor javascript loader settings
    docs/ # documentation of the package
    src/ # all client based scripts (untranspiled)
    └───images/
    │   └───svg/ # all svg files to be converted as sprite.svg
    └───js/
    │   └───components/ # react component class'es
    │   └───core/ # default core class'es of the package
    │   index.js # default script of the project
    └───sass/ # .scss files should be included
    templates/ # all SilverStripe template files of *.ss
    gulpfile.js # default file of the gulp to be executable
    package.json # all dependencies of template
    scsslint.yml # configuration of the sass rules
```

## TODO:

 1. Add some default styles (maybe implement with [Google Material Component](https://material.io/components/).
 2. Refactor `build:js` task to be more friendly with environments. (i mean when it's using live environment switch some minifies for it).
 3. Add reusing components (social share, newsletter, basic AJAX forms).
