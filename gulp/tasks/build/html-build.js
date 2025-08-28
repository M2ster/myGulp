import fileInclude from 'gulp-file-include';
import htmlClean from 'gulp-htmlclean';
import webpHTML from 'gulp-webp-html';

const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file',
};

const copyHtmlBuild = () => {
    return myApp.gulp
        .src(myApp.path.src.html)
        .pipe(fileInclude(fileIncludeSettings))
        .pipe(webpHTML())
        .pipe(htmlClean())
        .pipe(myApp.gulp.dest(myApp.path.build.html));
};

export default copyHtmlBuild;