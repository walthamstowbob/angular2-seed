// ////////////////////////////////////////////////
// Required
// // /////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

var input = 'app/css/**/*.scss';
var output = 'app/scss';

// ////////////////////////////////////////////////
// Scripts
// // /////////////////////////////////////////////

gulp.task('scripts', function(){
    gulp.src(['javascript/js/**/*.js', '!javascript/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('javascript/js'));
});

// ////////////////////////////////////////////////
// Compass / Sass Tasks
// // /////////////////////////////////////////////

gulp.task('compass', function(){
    gulp.src('app/scss/style.scss') 
        .pipe(plumber())
        .pipe(compass({
            config_file:'config.rb',
            css:'app/css',
            sass:'app/scss',
            require: ['susy']
        }))
        .pipe(gulp.dest('app/css/'))
});

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