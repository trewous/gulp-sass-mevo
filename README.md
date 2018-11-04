# gulp-sass-helper

Helper app to unify sass implementations for gulp task builds.

[![npm](https://img.shields.io/npm/v/gulp-sass-helper.svg)](https://www.npmjs.com/package/gulp-sass-helper)
[![npm](https://img.shields.io/npm/dt/gulp-sass-helper.svg)](https://www.npmjs.com/package/gulp-sass-helper)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/gulp-sass-helper.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/gulp-sass-helper)](https://dependabot.com)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 8).

## Installing

- `npm i -D gulp@next gulp-sass-helper stylelint stylelint-config-sass-guidelines stylelint-scss`

## Usage

```javascript
const gulp = require('gulp');
const helper = require('gulp-sass-helper');

const paths = {sass: {src: './react/**/*.scss', dest: './react'}};

let isDev = true;

const runSassCompiler = done => {
	helper.sassCompiler(paths);
	done();
};

const runSassLint = done => {
	helper.sassLint(paths, isDev);
	done();
};

const build = gulp.series(runSassLint, runSassCompiler);
```

### License

Copylefted (c) 2018 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
