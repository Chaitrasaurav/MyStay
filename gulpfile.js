var gulp = require('gulp');
var spritesmith  = require('gulp.spritesmith');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var svgSprite = require("gulp-svg-sprites");

gulp.task('sprite', function () {
    return gulp.src('src/dist/images/icons/*.svg')
        .pipe(svgSprite())
        .pipe(gulp.dest("src/dist/sprite"));
});

gulp.task('scripts', function() {
  gulp.src('src/scripts/*.*')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/scripts/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/dist/scripts/'))
});

gulp.task('styles', function () {
  return gulp.src('src/styles/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('src/dist/styles'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('src/dist/styles'));
});

gulp.task('default', function (callback) {
    runSequence('sprite', 'scripts', 'styles', callback);
});

gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', ['styles'])
    gulp.watch('src/scripts/*.*', ['scripts'])
});