import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpEjs from 'gulp-ejs';
import rename from 'gulp-rename';

const ejs = () => gulp.src(['./src/html/**/*.ejs', '!./src/html/**/_*.ejs'], { base: './src/html' })
  .pipe(plumber())
  .pipe(gulpEjs({}, {
    root: './src/html',
  }))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./dist/html'));

export default ejs;
