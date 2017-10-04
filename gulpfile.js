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
var translit      = require('speakingurl');
var gulp = require('gulp');


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

gulp.task('agecategories', function() {

    var config = {
    collection: '_agecategories',
    csv       : '_data/csv/agecategories',
    template  : '_gulp-templates/agecategories.hbs'
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

gulp.task('cities', function() {

    var config = {
    collection: '_cities',
    csv       : '_data/csv/cities',
    template  : '_gulp-templates/cities.hbs'
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
                .pipe(rename(config.collection+'/'+items[1]+'.md'))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('aircourses', function() {

    var config = {
    collection: '_courses',
    csv       : '_data/airtable/Courses-Main View',
    template  : '_gulp-templates/airtable/courses.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                    Course: items[0],
                    Schools: items[1],
                    Instructor: items[2],
                    Description: items[3],
                    Cities: items[4],
                    Place: items[5],
                    Categories: items[6],
                    Subcategories: items[7],
                    Level: items[8],
                    Age: items[9],
                    Agecategories: items[10],
                    Monday: items[11],
                    Tuesday: items[12],
                    Wednesday: items[13],
                    Thursday: items[14],
                    Friday: items[15],
                    Saturday: items[16],
                    Sunday: items[17],
                    practices: items[18]
            };
             var items1 = translit(items[1], {
                lang: 'en'
              })
            var items7 = translit(items[7], {
                lang: 'en'
              })
            var items4 = translit(items[4], {
                lang: 'en'
              })
            var items0 = translit(items[0], {
                lang: 'en'
              })
            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/'+items4,
                    basename: items0,
                    prefix: items1+'--'+items7+'---',
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('airsyllogos', function() {

    var config = {
    collection: '_syllogoi',
    csv       : '_data/airtable/Syllogos-Grid view',
    template  : '_gulp-templates/airtable/syllogos.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                    Name: items[0],
                    Notes: items[1],
                    Logo: items[2],
                    Images: items[3],
                    address: items[4],
                    City: items[5],
                    Perioxi: items[6],
                    phone: items[7],
                    facebook: items[8],
                    website: items[9],
                    Rensponsible: items[10]
            };
             var items5 = translit(items[5], {
                lang: 'en'
              })
            var items0 = translit(items[0], {
                lang: 'en'
              })
            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/'+items5,
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('airschool', function() {

    var config = {
    collection: '_schools',
    csv       : '_data/airtable/Schools-Main View',
    template  : '_gulp-templates/airtable/schools.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                    School : items[0],
                    City: items[1],
                    Perioxi: items[2],
                    Category: items[3],
                    Subcategory: items[4],
                    Notes: items[5],
                    Logo: items[6],
                    Address: items[7],
                    Phone: items[8],
                    email: items[9],
                    Courses: items[10],
                    Place: items[11],
                    Rensponsibletel: items[12],
                    Rensponsible: items[14]
            };
             var items1 = translit(items[1], {
                lang: 'en'
              })
            var items0 = translit(items[0], {
                lang: 'en'
              })
            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/'+items1,
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });

});

gulp.task('airplaces', function() {

    var config = {
    collection: '_places',
    csv       : '_data/airtable/Place-Main View',
    template  : '_gulp-templates/airtable/places.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                title: items[0],
                slug: translit(items[0], {lang: 'en'}),
                address: items[1],
                city: items[2],
                perioxi: items[3],
                latitude: items[4],
                longitude: items[5],
                zipcode: items[6],
                schools: items[7],
                courses: items[8]

            };
             var items2 = translit(items[2], {
                lang: 'en'
              })
            var items0 = translit(items[0], {
                lang: 'en'
              })
            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/'+items2,
                    basename: items0,
                    prefix: 'place--',
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});

gulp.task('airsubcategories', function() {

    var config = {
    collection: '_subcategories',
    csv       : '_data/airtable/Subcategories-Grid view',
    template  : '_gulp-templates/airtable/subcategories.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                Name: items[0],
                Slug: translit(items[0], {lang: 'en'}),
                Courses: items[1],
                Schools: items[2],
                Categories: items[3]
            };
            var items0 = translit(items[0], {
                lang: 'en'
              })

            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/',
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});

gulp.task('airagecategories', function() {

    var config = {
    collection: '_agecategories',
    csv       : '_data/airtable/Agecategories-Grid view',
    template  : '_gulp-templates/airtable/agecategories.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                Name: items[0],
                Slug: translit(items[0], {lang: 'en'}),
                Courses: items[1]
            };
            var items0 = translit(items[0], {
                lang: 'en'
              })

            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/',
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});

gulp.task('airlevels', function() {

    var config = {
    collection: '_levels',
    csv       : '_data/airtable/Level-Grid view',
    template  : '_gulp-templates/airtable/levels.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                Name: items[0],
                Slug: items[1],
                Courses: items[2]
            };
            var items0 = translit(items[0], {
                lang: 'en'
              })

            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/',
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});

gulp.task('aircities', function() {

    var config = {
    collection: '_cities',
    csv       : '_data/airtable/Cities-Grid view',
    template  : '_gulp-templates/airtable/cities.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                Name: items[0],
                Slug: translit(items[0], {lang: 'en'}),
                Courses: items[1],
                Place: items[2],
                Syllogos: items[3],
                Schools: items[4],
            };

            var items0 = translit(items[0], {
                lang: 'en'
              })

            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/',
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});

gulp.task('aircategories', function() {

    var config = {
    collection: '_categories',
    csv       : '_data/airtable/Categories-Grid view',
    template  : '_gulp-templates/airtable/categories.hbs'
};

    fs.readFile('./'+config.csv+'.csv', 'utf8', function(err, data){
        if (err) throw err;

        parsed = Papa.parse(data,{delimiter: ',',   newline: ''});
        rows = parsed.data;

        for(var i = 1; i < rows.length; i++) {
            var items = rows[i];

            var templateData = {
                Name: items[0],
                Slug: translit(items[0], {lang: 'en'}),
                Courses: items[1],
                Schools: items[2],
                Subcategories: items[3]
            };

            var items0 = translit(items[0], {
                lang: 'en'
              })

            // https://gist.github.com/antonreshetov/c41a13cfb878a3101196c3a62de81778
            gulp.src(config.template)
                .pipe(handlebars(templateData))
                .pipe(rename({  
                    dirname: config.collection+'/',
                    basename: items0,
                    extname: ".md"}))
                .pipe(gulp.dest('.'));
            }
      });
});