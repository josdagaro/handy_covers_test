var gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel');

function renderPug(files) {
    return gulp.src(files)
        .pipe(pug())
        .pipe(rename({dirname: './public/views/'}))
        .pipe(gulp.dest('./'));
}

gulp.task('build', ['pug', 'js']);

gulp.task('pug', function() {
    console.log('=> Rendering Pug...');
    renderPug('./resources/views/**/*.pug');
});

gulp.task('js', function() {
    console.log('=> Rendering Js...');

    return gulp.src("resources/assets/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest('public/transpiled'));
});

gulp.task('watch', function () {
    gulp.watch('./resources/assets/js/**/*.js', ['js']);
    gulp.watch('./resources/views/**/*.pug', ['pug']);
});
