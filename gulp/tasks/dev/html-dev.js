import fileInclude from 'gulp-file-include';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
browserSync.create();

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
};

const copyHtmlDev = () => {
    return myApp.gulp
        .src(myApp.path.src.html)
        .pipe(changed(myApp.path.dev.html))
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(myApp.gulp.dest(myApp.path.dev.html))
        .pipe(browserSync.stream());
};

export default copyHtmlDev;