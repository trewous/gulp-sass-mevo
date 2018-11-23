# gulp-sass-helper

Helper app to unify sass implementations for gulp task builds.

[![Build Status](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_apis/build/status/henriquecarv.gulp-sass-helper?branchName=master)](https://dev.azure.com/henriquecarvgit/henriquecarvgit/_build/latest?definitionId=3)[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhenriquecarv%2Fgulp-sass-helper.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhenriquecarv%2Fgulp-sass-helper?ref=badge_shield)

[![npm](https://img.shields.io/npm/v/gulp-sass-helper.svg)](https://www.npmjs.com/package/gulp-sass-helper)
[![npm](https://img.shields.io/npm/dt/gulp-sass-helper.svg)](https://www.npmjs.com/package/gulp-sass-helper)
[![LICENSE](https://img.shields.io/github/license/henriquecarv/gulp-sass-helper.svg)](./LICENSE)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=henriquecarv/gulp-sass-helper)](https://dependabot.com)

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 10).

## Installing

- `npm i -D gulp@next gulp-sass-helper stylelint stylelint-config-sass-guidelines stylelint-scss`

## Usage

- Create your stylelint files(".stylelintrc.json" and ".styleignore") on the root directory of your project.

- Setup your code [editor][3] to indent using spaces instead of tabs.

- Start with these basic lint configurations, adding your custom rules afterwards.

```json
{
  "plugins": ["stylelint-scss"],
  "extends": "stylelint-config-sass-guidelines"
}
```

- Create a gulpfile to run your tasks.

```javascript
const gulp = require('gulp');
const helper = require('gulp-sass-helper');

const paths = { sass: { src: './react/**/*.scss', dest: './react' } };

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

### License

Copylefted (c) 2018 [Henrique Carvalho da Cruz][1] Licensed under the [MIT license][2].

[1]: https://henriquecarv.com
[2]: ./LICENSE
[3]: ./.editorconfig


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhenriquecarv%2Fgulp-sass-helper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhenriquecarv%2Fgulp-sass-helper?ref=badge_large)