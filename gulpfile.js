const gulp = require("gulp");

const livereload = require("gulp-livereload");

const pug = require("gulp-pug");

const cssMinify = require("gulp-css-minify");

const { parallel } = require("gulp");

const minify = require("gulp-minify");

function pugcompile() {
  return gulp
    .src("src/**/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

function movecss() {
  return gulp
    .src("./src/css/*.css")
    .pipe(cssMinify())
    .pipe(gulp.dest("./build/css"));
}

function minfJs() {
  return gulp
    .src("./src/js/main.js")
    .pipe(minify())
    .pipe(gulp.dest("./build/js"));
}

exports.default = function () {
  require("./server");
  livereload.listen();
  gulp.watch(["./src/**/*.*"], parallel(pugcompile, movecss, minfJs));
};
