'use strict';

const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const pump = require('pump');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const css = (paths, cb) => {
	const result = [
		gulp.src(paths.sass.src),
		sass().on('error', error => {
			console.error(error.message);
			process.exit(1);
		}),
		cleanCSS({compatibility: 'ie8', inline: ['none']}),
		gulp.dest(file => {
			return file.base;
		}),
	];

	pump(result, cb);
};

module.exports = css;
