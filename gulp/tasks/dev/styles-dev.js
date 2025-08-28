import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupMedia from 'gulp-group-css-media-queries';
const sass = gulpSass(dartSass);
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
browserSync.create();

const copyScssDev = () => {
    return myApp.gulp
        .src(myApp.path.src.scss)
        .pipe(changed(myApp.path.dev.css))
        .pipe(sass())
        .pipe(groupMedia())
        .pipe(myApp.gulp.dest(myApp.path.dev.css))
        .pipe(browserSync.stream());
};

export default copyScssDev;