var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    maps      = require('gulp-sourcemaps');

//Scripts

gulp.task("concatScripts", function(){
  return gulp.src('source/js/*.js')
  .pipe(maps.init())
    .pipe(concat('main.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('public/js'))
})

gulp.task('minifyScripts', ['concatScripts'], function() {
  return gulp.src('public/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/js'))
});
