'use strict';

var gulp              = require('gulp'),
    postcss           = require('gulp-postcss'),
    autoprefixer      = require('autoprefixer'),
    atImport          = require('postcss-import'),
    cssnext           = require('cssnext'),
    csswring          = require('csswring'),
    mqpacker          = require('css-mqpacker'),
    sourcemaps        = require('gulp-sourcemaps'),
    jade              = require('gulp-jade'),
    browserSync       = require('browser-sync'),
    watch             = require('gulp-watch');


//Styles
gulp.task('css', function() {

  var processors = [
      autoprefixer({browsers: ['last 2 version']}),
      mqpacker,
      atImport,
      cssnext({
        'customProperties': true,
        'colorFunction': true,
        'customSelectors': true
      }),
      csswring
  ];

  return gulp.src('source/stylesheets/style.css')
      .pipe( sourcemaps.init() )
      .pipe(postcss(processors))
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest('public/stylesheets/style') )
});

//Jade
gulp.task('jade', function() {
  return gulp.src('views/**/*.jade')
    .pipe(jade({ pretty: true })
          .on('error', function (error) { console.warn(error.message); }))
    .pipe(gulp.dest('public/'))
});

//Watch
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('jade-watch', ['jade'], browserSync.reload);


//Serve
gulp.task('serve', ['css', 'jade'], function() {
    browserSync.init({
        server: "./public"
    });
    gulp.watch('css/**/*.css', ['css-watch']);
    gulp.watch('css/**/*.jade', ['jade-watch']);
});



//Default
gulp.task('default', ['serve']);
