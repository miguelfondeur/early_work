var gulp              = require('gulp'),
    postcss           = require('gulp-postcss'),
    autoprefixer      = require('autoprefixer'),
    atImport          = require('postcss-import'),
    cssnext           = require('cssnext'),
    csswring          = require('csswring'),
    mqpacker          = require('css-mqpacker'),
    sourcemaps        = require('gulp-sourcemaps'),
    customMedia       = require('postcss-custom-media');

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
      csswring,
      customMedia
  ];

  return gulp.src('source/stylesheets/style.css')
      .pipe( sourcemaps.init() )
      .pipe(postcss(processors))
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest('public/stylesheets/') )
});
