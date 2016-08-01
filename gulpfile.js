const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('default', () => {
  gulp.src(['main.js', 'src/**/*.js'])
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('rex.js'))
      .pipe(gulp.dest('dist/'));
});