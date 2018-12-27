'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', gulp.parallel(['sass']));
});