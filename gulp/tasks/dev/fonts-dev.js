import ttf2 from 'gulp-ttf2woff2';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
browserSync.create();

const fontsDev = () => {
    return myApp.gulp
        .src(myApp.path.src.fonts, {
            encoding: false,
            removeBOM: false,
        })
        .pipe(changed(myApp.path.dev.fonts))
        .pipe(ttf2())
        .pipe(myApp.gulp.dest(myApp.path.dev.fonts))
        .pipe(browserSync.stream());
};

export default fontsDev;