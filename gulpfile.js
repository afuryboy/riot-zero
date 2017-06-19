const gulp = require('gulp');
const riot = require('gulp-riot');
const concat  = require('gulp-concat');
const webpack = require('webpack-stream');
const less = require('gulp-less');
const autoprefix = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const jslint = require('gulp-jshint');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const minimist = require('minimist');
const del = require('del');
const nodemon = require('gulp-nodemon');
//const spritesmith = require('gulp.spritesmith');
const $ = require('gulp-load-plugins')();
const _env = { string:'env', default: { env:process.env.NODE_ENV || 'dev' }};
const args = require('minimist')(process.argv.slice(2),_env);
gulp.task('less',function(){
  gulp.src('src/css/**/*.less')
  .pipe(less())
  .pipe(concat('bundle.css'))
  .pipe(autoprefix())
  .pipe(gulp.dest('src'))
});
// gulp.task('sprite', function () {
//   var spriteData = gulp.src('src/imgs/icons/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     cssName: 'sprite.css'
//   }));
//   return spriteData.pipe(gulp.dest('src/css'));
// });
gulp.task('sprite', function () {
  gulp.src('src/imgs/icons/*.png').pipe($.spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.less'
  }))
  .pipe(gulp.dest('src/css/common'));
});
gulp.task('useref',['clean'],function(){
    gulp.src('src/index.html')
    .pipe(useref())
    .pipe(gulpif(args.env === 'dist',gulp.dest('dist/')))
})
gulp.task('webpack',function(){
  gulp.src('src/js/boot.js')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('src'))
});
gulp.task('riot',function(){
  gulp.src(['src/js/tags-dep.js','src/tag/**'])
  .pipe(riot())
  .pipe(concat('tags.js'))
  .pipe(gulp.dest('src/js'))
});
gulp.task('clean',function(){
    if(args.env === 'dist'){
        return del('dist/');
    }else{
        return;
    }
});
gulp.task('dev-serve',function(){
    nodemon({
        script: 'config.js',
        ext: 'js',
        watch: ['config.js']
    });
})
gulp.task('dev',['riot','webpack','less','dev-serve'],function(){
  gulp.watch(['src/tag/**/*.tag'],['riot','webpack']);
  gulp.watch(['src/js/*.js','!src/js/tags.js'],['webpack']);
  gulp.watch('src/css/**/*.less',['less']);
});
// gulp.task('jslint',function(){
//     return gulp.src('src/js/**/*.js')  // 检查文件：js目录下所有的js文件
//         .pipe(jslint())       // 进行检查
//         .pipe(jslint.reporter('default'))  // 对代码进行报错提示
// });

gulp.task('dist',['useref'])
gulp.task('default',['dev']);
