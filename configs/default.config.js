module.exports = {
    tasks: './configs/tasks',
    paths: {
        images: './src/images',
        svg: './src/images/svg/**/*.svg',
        sass: './src/sass/**/*.scss',
        scsslint: './scsslint.yml',
        entry: './src/js/index.jsx',
        js: './src/js/**/*.jsx',
        html: './templates/**/*.{html|ss}',
        dist: './assets'
    },
    output: {
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