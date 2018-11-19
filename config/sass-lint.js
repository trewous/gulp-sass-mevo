const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const pump = require('pump');

const sassLint = (paths, isDev, cb) => {
  const result = [
    gulp.src(paths.sass.src),
    gulpStylelint({
      debug: true,
      failAfterError: false,
      fix: !isDev,
      reporters: [{ console: true, formatter: 'string' }],
    }),
  ];

  if (!isDev) {
    result.push(gulp.dest(paths.sass.dest));
  }

  pump(result, cb);
};

module.exports = sassLint;
