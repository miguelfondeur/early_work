var gulp                = require('gulp'),
    mainBowerFiles      = require('main-bower-files'),
    concat              = require('gulp-concat');

//Bower
gulp.task("bower", function(){
    return gulp.src(mainBowerFiles())
    .pipe(concat('bower.js'))
    .pipe(gulp.dest('public/js'));
});
