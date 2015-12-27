'use strict';

var gulp                = require('gulp'),
    browserSync         = require('browser-sync'),
    watch               = require('gulp-watch'),
    requireDir          = require('require-dir'),
    gls                 = require('gulp-live-server');

requireDir('./gulp_tasks');

//Watch
gulp.task('watchFiles', function() {
  gulp.watch('source/stylesheets/**/*.css', ['css']);
  gulp.watch('source/js/*.js', ['minifyScripts']);
  gulp.watch('views/*.jade');
});

//Serve
gulp.task('serve', function() {
  //1. serve with default settings
  var server = gls.static('public', 3000);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['watchFiles'], function (file) {
    server.notify.apply(server, [file]);
  });
});

//Build
gulp.task('build', ['minifyScripts', 'css', 'bower']);

//Default
gulp.task('default', ['build']);
