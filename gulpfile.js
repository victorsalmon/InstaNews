var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint');

gulp.task('scripts', function(){
  gulp.src ('./js/*.js')
    .pipe(uglify ())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['scripts'])
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch(['./build/js/*.js', './css/style.css']).on('change', browserSync.reload);
});

gulp.task('lint', function(){
    return gulp.src(['./js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['watch', 'browser-sync']);