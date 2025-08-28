import changed from 'gulp-changed';
import browserSync from 'browser-sync';
browserSync.create();

const copyImageDev = () => {
    return myApp.gulp
        .src(myApp.path.src.img, { encoding: false })
        .pipe(changed(myApp.path.dev.img))
        .pipe(myApp.gulp.dest(myApp.path.dev.img))
        .pipe(browserSync.stream());
};

export default copyImageDev;