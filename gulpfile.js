var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('default', function(){
  gulp.src ('./js/*.js')
    .pipe(uglify ())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'));
  gulp.dest('test.min.js');
});
