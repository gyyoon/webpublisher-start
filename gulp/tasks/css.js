import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import using from 'gulp-using';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';

const cssTask = () => {
  const processors = [
    autoprefixer({
      browsers: ['last 2 version', 'ie 11'],
    }),
    mqpacker,
  ];

  return gulp.src('./dist/**/*.css', { base: './dist/css' })
    .pipe(using())
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
};

export default cssTask;
