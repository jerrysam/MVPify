var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  return sass('app/assets/scss/main.scss')
    .pipe(gulp.dest('app/assets/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('default', ['serve']);

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
  // Line 22 (below) works fine and reloads the browser when I refresh html/css
  gulp.watch(['*.html', 'assets/**/*.css', 'assets/**/*.js'], {cwd: 'app'}, reload);
  gulp.watch('app/assets/**/*.scss', ['sass']);
  //Line 23 (above) doesn't trigger my 'sass' function at line 6, but "gulp sass" in terminal does trigger the refresh/recompile
});


//
// Everything above this comment is working
//



/////////////////////////


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
//
// gulp.task('sass', function() {
//   return sass('assets/sass/main.scss')
//     .pipe(gulp.dest('app/assets/css'))
//     .pipe(reload({ stream:true }));
// });
//
// // watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
// // gulp.task('serve', ['sass'], function() {
// //   browserSync({
// //     server: {
// //       baseDir: 'app'
// //     }
// //   });
// //   gulp.watch('app/assets/sass/*.scss', ['sass']);
// // });
//
// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//     browserSync.init({
//         server: "./app"
//     });
//     gulp.watch("./aassets/sass/*.scss", ['sass']);
//     gulp.watch("./*.html").on('change', browserSync.reload);
// });
//
// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("./assets/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("./app/assets/css"))
//         .pipe(browserSync.stream());
// });
//
// gulp.task('default', ['serve']);

/////////////////////////

// gulp.task('default', function() {
//   browserSync.init({
//       server: {
//           baseDir: "./"
//       }
//   });
//   gulp.watch("*.html").on("change", browserSync.reload);
//   gulp.watch("**/*.css").on("change", browserSync.reload);
// });

// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });
