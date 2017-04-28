var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");

gulp.task("sass", function() {
    return gulp
        .src("src/sass/**/*.sass")
        .pipe(sass())
        .pipe(rename({
            basename: "build",
            extname: ".css"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("cssmin", function () {
    gulp
    .src("dist/*.css")
    .pipe(cssmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
    gulp.watch("src/sass/**/*.sass", ["sass"]);
});