import browserSync from 'browser-sync';
browserSync.create();
import changed from 'gulp-changed';

const copyJsDev = () => {
    return myApp.gulp.
        src(myApp.path.src.js)
        .pipe(changed(myApp.path.dev.js))
        .pipe(myApp.gulp.dest(myApp.path.dev.js))
        .pipe(browserSync.stream());
};

export default copyJsDev;