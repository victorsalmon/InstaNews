var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('default', function(){
  gulp.src ('./js/*.js').pipe()
  gulp.dest('test.min.js');
});
