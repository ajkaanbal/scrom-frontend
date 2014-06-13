"use strict"
var gulp = require('gulp');
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var plugins = require("gulp-load-plugins")({lazy:false});


gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['./app/**/*.html'])
    .pipe(plugins.flatten())
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('css', function(){
    gulp.src('./app/*.css')
        .pipe(plugins.concat('app.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function(){
    //concatenate vendor JS files

    browserify('./app/app.js').bundle()
      .pipe(source('./app/app.js'))
      .pipe(plugins.flatten())
      .pipe(gulp.dest('./build'))

});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src(['!./app/components/**/*.min.css',
        './app/components/**/*.css'])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-fonts', function() {
    gulp.src(['./app/components/**/fonts/*.{ttf,woff,eot,svg}'])
        .pipe(plugins.flatten())
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',
        'build/**/*.js',
        'build/**/*.css'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/*.css',['css']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',[
  'connect',
  'scripts',
  'templates',
  'css',
  'copy-index',
  'copy-fonts',
  'vendorCSS',
  'watch'
]);
