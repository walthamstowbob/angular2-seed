// ////////////////////////////////////////////////
// Required
// // /////////////////////////////////////////////

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

// var uglify = require('gulp-uglify');
// var compass = require('gulp-compass');
// var plumber = require('gulp-plumber');
// var sass = require('gulp-sass');
// var rename = require('gulp-rename');

// var input = 'app/css/**/*.scss';
// var output = 'app/scss';

// ////////////////////////////////////////////////
// Scripts
// // /////////////////////////////////////////////

gulp.task('compile-ts', function(){
    var sourceTsFiles = [
        config.allTs,
        config.typings
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(tsc(tsProject));
    
    return tsResult.js
    .pipe(gulp.dest(config.tsOutputPath))
});

// gulp.task('scripts', function(){
//     gulp.src(['javascript/js/**/*.js', '!javascript/js/**/*.min.js'])
//     .pipe(plumber())
//     .pipe(rename({suffix:'.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('javascript/js'));
// });

// ////////////////////////////////////////////////
// Compass / Sass Tasks
// // /////////////////////////////////////////////

// gulp.task('compass', function(){
//     gulp.src('app/scss/style.scss') 
//         .pipe(plumber())
//         .pipe(compass({
//             config_file:'config.rb',
//             css:'app/css',
//             sass:'app/scss',
//             require: ['susy']
//         }))
//         .pipe(gulp.dest('app/css/'))
// });

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('javascript/js/**/*.js', ['scripts']);
    gulp.watch('app/scss/**/*.scss', ['compass']);
});

// ////////////////////////////////////////////////
// Default Task
// // /////////////////////////////////////////////
gulp.task('default', ['scripts', 'compass', 'watch']);