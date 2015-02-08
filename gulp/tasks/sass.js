var gulp = require('gulp');
var sass = require('gulp-sass');
var size = require('gulp-filesize');

gulp.task('sass', function() {
  return gulp.src('css/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist'))
             .pipe(size());
});
