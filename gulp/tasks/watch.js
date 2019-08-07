import gulp from 'gulp';
import browserSync from 'browser-sync';
import sassTask from './sass';
import cssTask from './css';
// don't compile js
// import es6 from './es6';
import ejs from './ejs';
import assets from './assets';

const browserReload = (done) => {
  browserSync.reload();
  done();
};

const watchSass = gulp.series(
  sassTask,
  cssTask,
  browserReload,
);

// const watchJs = gulp.series(
//   es6,
//   browserReload,
// );

const watchEjs = gulp.series(
  ejs,
  browserReload,
);

const watchAssets = gulp.series(
    assets,
    browserReload,
);


const watch = () => {
  browserSync.init({
    watchOptions: {
      debounceDelay: 1000,
    },
    server: {
      baseDir: './dist',
      directory: true,
    },
  });

  gulp.watch(['./src/**/*.scss'], watchSass);
//   gulp.watch(['./src/**/*.js'], watchJs);
  gulp.watch(['./src/**/*.ejs'], watchEjs);

  gulp.watch(['./src/assets/*.+'], watchAssets);
};

export default watch;
