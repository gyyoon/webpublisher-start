import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import using from 'gulp-using';

const sassTask = () => gulp.src('./src/css/**/*.scss', { base: './src/css' })
  .pipe(using())
  .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));

export default sassTask;
