var bify   = require('browserify');
var gulp   = require('gulp');
var react  = require('reactify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('scripts', function() {
  bify('./js/_app.js').transform(react)
                      .transform(babelify)
                      .bundle()
                      .pipe(source('app.js'))
                      .pipe(gulp.dest('./dist'));
});
