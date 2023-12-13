let gulp = require('gulp');
let browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

function css_style(done) {
  gulp.src(['./scss/**/*.scss', '!./scss/utils/*.scss'])
    .pipe(sass({
      errorLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
  done();
}

function watchFiles() {
  gulp.watch(['./scss/**/*.scss', '!./scss/utils/*.scss'], css_style);
  gulp.watch('./css/**/*.css', browserReload);
  gulp.watch('./**/*.js', browserReload);
  gulp.watch('./**/*.html', browserReload);
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "homepage.html"
    },
    port: 3000
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

gulp.task('default', gulp.parallel(sync, watchFiles));