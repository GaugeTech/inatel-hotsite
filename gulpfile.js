var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    // SASS
    less         = require('gulp-less'),
    path         = require('path'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    // JS
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    stylish      = require('jshint-stylish'),
    json         = require('gulp-json');
    // GENERAL
    htmlmin      = require('gulp-htmlmin'),
    imagemin     = require('gulp-imagemin'),
    gulpSequence = require('gulp-sequence'),
    clean        = require('gulp-clean');

// PATHS SRC
var paths = {
    html: {
        input:      'app/**/*.html'
    },
    less: {
        input:      'app/assets/less/**/*.less',
        output:     'build/assets/css'
    },
    cleanJs: {
        output:     'build/js/min/all.min.js',
    },
    js: {
        input:      'app/js/**/*.js',
        output:     'build/js/',
    },
    json: {
        input:      'app/json/*.json',
        output:     'build/json/',
    },    
    css: {
        input:      'app/assets/css/**/*.css',
        output:     'build/assets/css',
    },
    gif: {
        input:      'app/assets/*.gif',
        output:     'build/assets',
    },
	font: {
        input:      'app/assets/fonts/*.*',
        output:     'build/assets/fonts/',
	},
    jsLibs: {
        input:   'app/lib/**/*',
        output:  'build/lib'
    },
    imagemin: {
        input:      'app/assets/img/**/*',
        output:     'build/assets/img/'
    },
    livereload: {
        input:      ['app/**/*.html', 'app/**/*.js', 'app/**/*.less', 'app/assets/**/*.less']
    },
    outputGeneral: 'build'
};

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

// HTML
gulp.task("html", function() {
    gulp.src(paths.html.input)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.outputGeneral));
});

gulp.task('less', function () {
    return gulp.src(paths.less.input)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(paths.less.output));
});

gulp.task('css', function() {
    return gulp.src([
		paths.css.input])
        .pipe(gulp.dest(paths.css.output));
});

// IMAGE
gulp.task('imagemin', function (){
    gulp.src(paths.imagemin.input)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.imagemin.output));
});

//FONTS
gulp.task('fonts', function() {
    return gulp.src([
		paths.font.input])
        .pipe(gulp.dest(paths.font.output));
});

gulp.task('libs', function() {
    return gulp.src([
		paths.jsLibs.input])
        .pipe(gulp.dest(paths.jsLibs.output));
});


//COPY GIF
gulp.task('gif', function() {
    return gulp.src([paths.gif.input])
        .pipe(gulp.dest(paths.gif.output));
});

//COPY JS
gulp.task('js', function() {
    return gulp.src([paths.js.input])
        .pipe(gulp.dest(paths.js.output));
});

//COPY JSONS
gulp.task('json', function() {
    return gulp.src([paths.json.input])
        .pipe(gulp.dest(paths.json.output));
});

// LIVERELOAD
gulp.task('livereload', function (){
    gulp.src(paths.livereload.input)
    .pipe(connect.reload());
});

// CLEAN ALL
gulp.task('cleanAll', function () {
    return gulp.src(paths.outputGeneral)
        .pipe(clean({force: true}));
});

// WATCH
gulp.task('watch', function () {
    gulp.watch(paths.html.input,    ['html']);
    gulp.watch(paths.less.input,    ['less']);
    gulp.watch(paths.js.input,      ['js']);
    gulp.watch(paths.json.input,      ['json']);
    gulp.watch(paths.livereload.input, ['livereload']);
});

gulp.task("default", gulpSequence('cleanAll', 'connect', 'less', 'html', 'css', 'watch', 'js', 'json', 'gif', 'fonts', 'imagemin'));
