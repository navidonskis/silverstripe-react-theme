module.exports = {
    tasks: './configs/tasks',
    paths: {
        images: './src/images',
        svg: './src/images/svg/**/*.svg',
        sass: './src/sass/**/*.scss',
        scsslint: './scsslint.yml',
        entry: './src/js/index.js',
        js: './src/js/**/*.js',
        html: './templates/**/*.{html|ss}',
        dist: './assets',
        vendor: {
            // include dependencies
            dependencies: [],
            // name of the bundle to be combine all dependencies into one file
            bundleName: 'vendor.js'
        }
    },
    sass: {
        version: ['last 2 versions']
    },
    output: {
        jsBundleName: 'app.js',
        jsProdBundleName: 'app.min.js',
        js: 'js',
        css: 'css',
        images: 'images'
    },
    browserSync: {
        //server: config.paths.dist,
        proxy: {
            // change your web host
            target: 'http://your-app.dev'
        }
    }
};
