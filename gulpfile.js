var gulp = require('gulp'),
    ts             = require('gulp-typescript'),
    sourcemaps     = require('gulp-sourcemaps'),
    gulpCopy       = require('gulp-copy'),
    runSequence    = require('run-sequence'),
    clean          = require('gulp-clean'),
    mainBowerFiles = require('main-bower-files'),
    debug          = require('gulp-debug'),
    install        = require('gulp-install'),
    concat         = require('gulp-concat'),
    jade           = require('gulp-jade'),
    embedTemplates = require('gulp-angular-embed-templates');

gulp.task('default', function(pipe){
   runSequence('clean', 'install', 'build', pipe); 
});

gulp.task('install', ['bower:install']);

gulp.task('bower:install', function(){
    return gulp.src(['./bower.json'])
               .pipe(install());
});

gulp.task("build", function(pipe){
   runSequence("preprocess", "build:all", pipe)
});

gulp.task('build:all', ['js:build', 'css:build', 'dependencies:build']);

gulp.task("preprocess", ['jade:compile']);

gulp.task("jade:compile", function(){
    gulp.src('./src/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./src'))
});

gulp.task('dependencies:build', function(){
    // TODO: I would like to add a flattening here for now ok
  return gulp.src(mainBowerFiles())
        // .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(concat('deps.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public'))
});

gulp.task('js:build', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src() // also can use *.js files
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("public/ng2"));
});
gulp.task('css:build', function(){
   return gulp.src('src/ng2/**/*.css')
              .pipe(debug())
              .pipe(gulpCopy('public/ng2', {
                  prefix: 2
              }))
});
gulp.task('clean', function(){
   return gulp.src(['public/ng2', 'public/deps', 'bower_components'], {read: false})
              .pipe(clean());
});
