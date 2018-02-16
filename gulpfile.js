const gulp = require('gulp');
const install = require('gulp-install');
const zip = require('gulp-zip');
const clean = require('gulp-clean');

gulp.task('clean', () =>
  gulp.src('./build/*', { read: false }).pipe(clean()));

gulp.task('install-dependancies', () =>
  gulp.src('./package.json')
    .pipe(gulp.dest('./build'))
    .pipe(install({ production: true })));

gulp.task('build-zip', () =>
  gulp.src('./build/**/*')
    .pipe(zip('twilioCaller.zip'))
    .pipe(gulp.dest('./build')));
