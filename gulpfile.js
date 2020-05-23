'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rollup  = require('gulp-rollup');
const rollupPluginBabel = require('rollup-plugin-babel');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(rollup({
            output: {
                format: "iife"
            },
            plugins: [
                rollupPluginBabel({
                    "presets": [["@babel/env", { "modules": false }]],
                })
            ],
            input: './src/main.js'
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    return gulp.watch('./src/**/*.scss',  gulp.series('sass'));
});

gulp.task('js:watch', function () {
    return gulp.watch('./src/**/*.js',  gulp.series('js'));
});

gulp.task('html:watch', function () {
    return gulp.watch('./src/**/*.html',  gulp.series('html'));
});


gulp.task('build', gulp.parallel('js', 'sass', 'html'));

gulp.task('build:watch', gulp.parallel('js:watch', 'sass:watch', 'html:watch'));

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});

gulp.task('server:watch', gulp.series('server', function () {
    browserSync.watch(`./dist/**/*.*`).on('change', browserSync.reload)
}));

gulp.task('watch', gulp.parallel('build:watch', 'server:watch'));