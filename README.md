# next-io-gulp
Helper app to unify gulp implementations for next-io gulp task builds.

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 8).

## Installing

- `npm i -D gulp@next next-io-gulp stylelint stylelint-config-sass-guidelines stylelint-scss`

## Usage

```javascript
const gulp = require('gulp');
const nextIOGulp = require('next-io-gulp');

const paths = {sass: {src: './react/**/*.scss', dest: './react'}};

let isDev = true;

const runSassCompiler = done => {
	nextIOGulp.sassCompiler(paths);
	done();
};

const runSassLint = done => {
	nextIOGulp.sassLint(paths, isDev);
	done();
};

const build = gulp.series(runSassLint, runSassCompiler);
```

