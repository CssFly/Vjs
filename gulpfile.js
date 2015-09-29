'use strict';

var FILE_SPLIT = '<!--quark-->';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var change = require('gulp-change');
var del = require('del');

var vanilla = require('./gulp/vanilla.js');

var ALL_JS = 'src/js/';
var INDEX = 'src/index.html';
var QUARKS_JS = 'src/js/quarks/';
var DEST = 'dest/';

gulp.task('concat', function()
{
    return gulp.src(QUARKS_JS + '*.js')
      .pipe(concat('V.js', {newLine: FILE_SPLIT + '\n'}))
      .pipe(change(vanilla.constructV))
      .pipe(gulp.dest(ALL_JS));
});

gulp.task('concat:watch', function ()
{
  gulp.watch(QUARKS_JS + '/*.js', ['concat']);
});

gulp.task('copy:index', function ()
{
  return gulp.src(INDEX)
    .pipe(gulp.dest(DEST));

});

gulp.task('clean:dest', function ()
{
  return del([DEST + '**/*']);
});

gulp.task('build', ['clean:dest', 'copy:index', 'concat'], function()
{
  return gulp.src(ALL_JS + 'V.js')
    .pipe(uglify())
    .pipe(change(vanilla.wrapAnonymous))
    .pipe(gulp.dest(DEST + 'js/'));
});

gulp.task('default',['concat', 'concat:watch']);

