var concat  = require('gulp-concat');
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

gulp.task('main', function () {
  
  return gulp.src(['./src/internal/*.js', './src/main.js'])
             .pipe(concat('rex.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('module', function () {
  
  return gulp.src('./src/module/*.js')
             .pipe(concat('rex-module.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('dispatcher', function () {
  
  return gulp.src('./src/package/dispatcher/*.js')
             .pipe(concat('rex-dispatcher.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('h', function () {
  
  return gulp.src('./src/package/h/*.js')
             .pipe(concat('rex-h.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('http', function () {
  
  return gulp.src('./src/package/http/*.js')
             .pipe(concat('rex-http.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('mask', function () {
  
  return gulp.src('./src/package/mask/*.js')
             .pipe(concat('rex-mask.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('route', function () {
  
  return gulp.src('./src/package/route/*.js')
             .pipe(concat('rex-route.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('w', function () {
  
  return gulp.src('./src/package/w/*.js')
             .pipe(concat('rex-w.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('./dist/'));
  
});

gulp.task('default', ['main', 'module', 'dispatcher', 'h', 'http', 'mask', 'route', 'w']);