var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function(){
  gulp.src ('./js/*.js')
    .pipe(autoprefixer ({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(uglify ())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'));
  gulp.dest('test.min.js');
});

gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['scripts'])
});

gulp.task('default', ['watch'])