// Generated by CoffeeScript 1.10.0
(function() {
  var gulp, lessToScss;

  gulp = require('gulp');

  lessToScss = require('gulp-less-to-scss');

  gulp.task('lessToScss', function() {
    return gulp.src('./BASICA/less/main.less').pipe(lessToScss()).pipe(gulp.dest('./assets/styles/basic'));
  });

}).call(this);
