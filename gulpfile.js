const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('build', () => {
  gulp.src(['src/*.js'])
      .pipe(concat('rex.min.js'))
      .pipe(uglify({ unsafe: true }))
      .pipe(gulp.dest('dist/'));
});