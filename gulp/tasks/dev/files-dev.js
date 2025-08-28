import changed from 'gulp-changed';
import browserSync from 'browser-sync';
browserSync.create();

const copyFilesDev = () => {
    return myApp.gulp
        .src(myApp.path.src.files, { encoding: false })
        .pipe(changed(myApp.path.dev.files))
        .pipe(myApp.gulp.dest(myApp.path.dev.files))
        .pipe(browserSync.stream());
};

export default copyFilesDev;