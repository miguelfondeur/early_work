var gulp              = require('gulp'),
    jade              = require('gulp-jade');


//Jade
gulp.task('jade', function() {
  return gulp.src('views/**/*.jade')
    .pipe(jade({ pretty: true })
          .on('error', function (error) { console.warn(error.message); }))
    .pipe(gulp.dest('public/'))
});
