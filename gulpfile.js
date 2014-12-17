var gulp = require('gulp');
var tsc = require('gulp-tsc');
var clean = require('gulp-clean');
var karma = require('karma').server;
var install = require("gulp-install");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var coveralls = require('gulp-coveralls');

//// Config
var config = {
	sourceFolder: 'src/',
	destFolder: 'dest/'
};

//// Clean
gulp.task('clean', function () {
    return gulp.src([config.destFolder], { read: false })
      .pipe(clean({ force: true }));
});

//// Bundle
gulp.task('bundle', ['clean'], function() {
    return gulp.src(
      [config.sourceFolder + 'module.ts',
       config.sourceFolder + '**/*.ts'])
      .pipe(tsc())
      .pipe(concat('nsquared-ng-utils.js'))
      .pipe(gulp.dest(config.destFolder))
      .pipe(uglify())
      .pipe(rename({
            suffix: '.min'
        }))
      .pipe(gulp.dest(config.destFolder));
});

//// Test
gulp.task('test', ['bundle'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true    
  }, done);
});

//// Test
gulp.task('testForCI', ['bundle'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    browsers: ['Firefox']
  }, done);
});

//// Install
gulp.task('install', function() {
   gulp.src(['./bower.json', './package.json', './tsd.json'])
  .pipe(install()); 
});

//// Coverage
gulp.task('coveralls', function(){
  return gulp.src('coverage/**/lcov.info')
  .pipe(coveralls());
});

gulp.task('default', ['bundle']);