var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');


gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: './'
    },
    notify: false,
  });
});

gulp.task('sass', function() { 
    return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) 
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
        .pipe(gulp.dest('css')) 
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); 
    gulp.watch('./*.html').on('change', browserSync.reload);
});