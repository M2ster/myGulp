import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupMedia from 'gulp-group-css-media-queries';
const sass = gulpSass(dartSass);
import csso from 'gulp-csso';

const copyScssBuild = () => {
    return myApp.gulp
        .src(myApp.path.src.scss)
        .pipe(sass())
        .pipe(groupMedia())
        .pipe(csso())
        .pipe(myApp.gulp.dest(myApp.path.build.css));
};

export default copyScssBuild;