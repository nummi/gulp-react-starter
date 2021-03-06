var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('js/*.js*', ['scripts']);
  gulp.watch('css/**/*.scss', ['sass']);
  gulp.watch('pages/*.html', ['partials', 'html']);
});
