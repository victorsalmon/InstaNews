var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function(){
  gulp.src ('./js/*.js')
    .pipe(uglify ())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'));
  gulp.dest('test.min.js');
});

//    CSS
//    .pipe(autoprefixer ({
//      browsers: ['last 2 versions'],
//    }))

gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['scripts'])
});

gulp.task('default', ['watch'])