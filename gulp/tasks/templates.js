'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');


module.exports = gulp.task('templates', function () {
  return gulp.src(config.paths.src.templates)
    .pipe(gulpif(release, minifyHTML({empty: true, spare: true, quotes: true})))
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest(config.paths.src.templatesCompiled));
});
