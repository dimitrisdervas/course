var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var prefix       = require('gulp-autoprefixer');
var cp           = require('child_process');
var sourcemaps   = require('gulp-sourcemaps');
var concat       = require('gulp-concat');
var nano         = require('gulp-cssnano');
var util         = require('gulp-util');
var gulpif       = require('gulp-if');
var plumber      = require('gulp-plumber');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var fs           = require('fs');
var handlebars   = require('gulp-compile-handlebars');
var rename       = require('gulp-rename');

var mainBowerFiles = require('gulp-main-bower-files');
var postcss      = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var sorting      = require('postcss-sorting');
var assets       = require('postcss-assets');
var responsive   = require('gulp-responsive');
var shell        = require("gulp-shell");
var baby         = require('babyparse');
var Papa         = require("papaparse")

gulp.task('levels', function() {

    var config = {
    collection: '_levels',
    csv       : '_data/csv/levels',
    template  : '_gulp-templates/levels.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                title: items[0]
            };
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename(config.collection+'/'+items[0]+'.md'))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('subcategories', function() {

    var config = {
    collection: '_subcategories',
    csv       : '_data/csv/subcategories',
    template  : '_gulp-templates/subcategories.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                title: items[0],
                slug: items[1]
            };
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename(config.collection+'/'+items[1]+'.md'))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('age-categories', function() {

    var config = {
    collection: '_age-categories',
    csv       : '_data/csv/age-categories',
    template  : '_gulp-templates/age-categories.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                title: items[0],
                ages: items[1],
                slug: items[2]
            };
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename(config.collection+'/'+items[2]+'.md'))
                .pipe(gulp.dest('.'));
            }
      });

});