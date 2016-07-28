// ////////////////////////////////////////////////
// Required
// // /////////////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    compass = require('gulp-compass');
    rename = require('gulp-rename');

// ////////////////////////////////////////////////
// Scripts
// // /////////////////////////////////////////////

gulp.task('scripts', function(){
    gulp.src(['js/**/*.js', '!js/**/*/min.js'])
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('javascript/js'));
});

// ////////////////////////////////////////////////
// Compass / Sass Tasks
// // /////////////////////////////////////////////
gulp.task('compass', function(){
    gulp.src('scss/style.scss')
        .pipe(compass({
            config_file:'./config.rb',
            css:'./css',
            sass:'./scss',
            require: ['susy']
        }))
        .pipe(gulp.dest('./css'))
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////
gulp.task('watch', function(){
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['compass']);
});

// ////////////////////////////////////////////////
// Default Task
// // /////////////////////////////////////////////
gulp.task('default', ['scripts', 'compass', 'watch']);