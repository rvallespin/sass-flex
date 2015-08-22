var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('sass', function() {
    return sass('./sass/main.scss')
        .pipe(gulp.dest('./css/'))
        .pipe(reload({ stream:true }));
});

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
});

