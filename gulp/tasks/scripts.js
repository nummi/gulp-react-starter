var gulp   = require('gulp');
var browserify = require('browserify');
var to5Browserify = require('6to5-browserify');
var source = require('vinyl-source-stream');
var react  = require('reactify');

gulp.task('scripts', function() {
  browserify('./js/_app.js')
    .transform(react)
    .transform(to5Browserify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});
