var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');
var jsonServer = require('json-server');

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./'));
});

// API (database) Server
var apiServer = jsonServer.create();
var router = jsonServer.router('db.json');

apiServer.use(jsonServer.defaults);
apiServer.use(router);

gulp.task('serve:api', function (cb) {
  apiServer.listen(3001);
  cb();
});

// Web Server
gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));

gulp.task('default', ['serve:api', 'serve:web', 'webpack']);