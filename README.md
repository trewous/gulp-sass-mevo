# mevo-gulp-sass

This project is based on Henrique Carvalho da Cruz gulp-sass-helper, I have replaced node-sass for dart-sass
Helper app to unify sass implementations for gulp task builds.

[![npm](https://img.shields.io/npm/v/gulp-sass-helper.svg)](https://www.npmjs.com/package/mevo-gulp-sass)
[![npm](https://img.shields.io/npm/dt/gulp-sass-helper.svg)](https://www.npmjs.com/package/mevo-gulp-sass)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/gulp-sass-helper.svg)](./LICENSE)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 10).

## Installing

- `npm i -D gulp mevo-sass-helper stylelint stylelint-config-sass-guidelines stylelint-scss`

## Usage

- Create your stylelint files(".stylelintrc.json" and ".styleignore") on the root directory of your project.
- Start with these basic lint configurations, adding your custom rules afterwards.

```json
{
  "plugins": ["stylelint-scss"],
  "extends": "stylelint-config-sass-guidelines"
}
```

- Create a gulpfile to run your tasks.

```javascript
const gulp = require("gulp");
const helper = require("mevo-gulp-sass");

const paths = { sass: { src: "./react/**/*.scss", dest: "./react" } };

let isDev = true;

const runSassCompiler = (done) => {
  helper.sassCompiler(paths);
  done();
};

const runSassLint = (done) => {
  helper.sassLint(paths, isDev);
  done();
};

const build = gulp.series(runSassLint, runSassCompiler);
```

- Create a **Browser's list** `.browserslistrc` configuration file, on the root directory of your project.

```json
# Browsers that we support

> 1%
last 2 versions
firefox >= 4
safari 7
safari 8
safari 9
IE 8
IE 9
IE 10
IE 11
```

### License

Copylefted (c) 2023 [Michel Januário da Silva][1] Licensed under the [MIT license][2].

[1]: https://www.linkedin.com/in/micheljsilva
[2]: ./LICENSE
