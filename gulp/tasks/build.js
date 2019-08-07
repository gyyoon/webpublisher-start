import gulp from 'gulp';
import sassTask from './sass';
import cssTask from './css';
// import es6 from './es6';
import ejs from './ejs';
import assets from './assets';

const build = gulp.series(
  sassTask,
  cssTask,
  // es6,
  ejs,
  assets,
);

gulp.task('build', build);

export default build;
