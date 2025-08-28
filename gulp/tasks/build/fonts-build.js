import ttf2 from 'gulp-ttf2woff2';

const fontsBuild = () => {
    return myApp.gulp
        .src(myApp.path.src.fonts, {
            encoding: false,
            removeBOM: false,
        })
        .pipe(ttf2())
        .pipe(myApp.gulp.dest(myApp.path.build.fonts))
};

export default fontsBuild;