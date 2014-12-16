var gulp = require('gulp');
var tsc = require('gulp-tsc');
var clean = require('gulp-clean');
var karma = require('karma').server;
var install = require("gulp-install");

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

//// TypeScript
gulp.task('typescript', function() {	
    gulp.src([config.sourceFolder + '**/*.ts'])
      .pipe(tsc())
      .pipe(gulp.dest(config.destFolder));
});

//// Test
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

//// Install
gulp.task('install', function() {
   gulp.src(['./bower.json', './package.json', './tsd.json'])
  .pipe(install()); 
});

gulp.task('default', ['clean','typescript']);