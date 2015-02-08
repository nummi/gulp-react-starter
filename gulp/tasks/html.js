var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('html', function () {
  return gulp.src('./dist/*.html')
             .pipe(connect.reload());
});
