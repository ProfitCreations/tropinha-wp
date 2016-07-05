gulp = require('gulp');
lessToScss = require('gulp-less-to-scss');

gulp.task('lessToScss', -> 
    gulp.src('./BASICA/less/*.less')
    .pipe(lessToScss())
    .pipe(gulp.dest('./assets/styles/basic'))
  )
