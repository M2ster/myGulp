const copyFilesBuild = () => {
    return myApp.gulp
        .src(myApp.path.src.files, { encoding: false })
        .pipe(myApp.gulp.dest(myApp.path.build.files));
};

export default copyFilesBuild;