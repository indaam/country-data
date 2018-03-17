var gulp = require('gulp');
    gulp.compass = require('gulp-compass')
    gulp.plumber = require('gulp-plumber')
    gulp.uglify = require('gulp-uglify')
    gulp.cssmin = require('gulp-cssmin')
    gulp.rename = require('gulp-rename')
    gulp.connect = require('gulp-connect')
    gulp.autoprefixer = require('gulp-autoprefixer')
    gulp.clean = require('gulp-clean')
    gulp.browserSync = require('browser-sync').create();


gulp.task('compass', function() {
  gulp.src('./src/sass/*.scss')
    .pipe(gulp.compass({
      config_file: './config.rb',
      css: 'dist/css',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(gulp.connect.reload());
});

gulp.task('js', function () {
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    .pipe(gulp.connect.reload())
});

gulp.task('connect', function() {
    gulp.connect.server({
        livereload: true
    });
});

gulp.task('js_min', function () {
  gulp.src('./src/js/*.js')
    .pipe(gulp.uglify())
    .pipe(gulp.rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('css_min', function () {
  gulp.src('./src/sass/*.scss')
    .pipe(gulp.compass({
      config_file: './config.rb',
      css: 'dist/css',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(gulp.autoprefixer(
        {
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }
    ))
    .pipe(gulp.cssmin())
    .pipe(gulp.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('dev-watch', ['compass', 'js'], function (done) {
    gulp.browserSync.reload();
    done();
});

gulp.task('watch', function() {
    gulp.watch(['src/sass/*'], {cwd: './'}, ['compass']);
    gulp.watch(['src/js/*'], {cwd: './'}, ['js']);
});

gulp.task('clean', function () {
  gulp.src(['./dist/js/', './dist/css/', './dist/images/*.png'])
    .pipe(gulp.clean())
});

gulp.task('dev', ['watch', 'connect']);
gulp.task('build', ['clean', 'compass', 'css_min', 'js', 'js_min']);


gulp.task('default', ['compass', 'js'], function () {

    // Serve files from the root of this project
    gulp.browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(["src/sass/*", "src/js/*"], ['dev-watch']);
});