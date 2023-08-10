const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const pump = require("pump");
const sass = require("gulp-sass");

sass.compiler = require("sass");

const css = (paths, cb) => {
	const result = [
		gulp.src(paths.sass.src),
		sass().on("error", (error) => {
			// eslint-disable-next-line no-console
			console.error(error.message);
			process.exit(1);
		}),
		cleanCSS({ compatibility: "ie8", inline: ["none"] }),
		autoprefixer(),
		gulp.dest((file) => file.base),
	];

	pump(result, cb);
};

module.exports = css;
