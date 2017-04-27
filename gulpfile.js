var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyerror = require('gulp-prettyerror');


gulp.task('scripts', function(){
  gulp.src ('./js/*.js')
    .pipe(uglify ())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task ('scss', function(){
  gulp.src ('./scss/style.scss')
    .pipe(prettyerror())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/css/style.min.css'));
})


gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['scripts'])
  gulp.watch('./scss/*.scss', ['sass'])
});


gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch(['./build/js/*.js', './scss/*.scss']).on('change', browserSync.reload);
});


gulp.task('lint', function(){
    return gulp.src(['./js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('default', ['watch', 'browser-sync']);