
const watchAllDev = () => {
    myApp.gulp.watch(myApp.path.watch.scss, myApp.gulp.series('scss:dev'));
    myApp.gulp.watch(myApp.path.watch.html, myApp.gulp.series('html:dev'));
    myApp.gulp.watch(myApp.path.watch.img, myApp.gulp.series('image:dev'));
    myApp.gulp.watch(myApp.path.watch.files, myApp.gulp.series('copy:dev'));
    myApp.gulp.watch(myApp.path.watch.js, myApp.gulp.series('js:dev'));
};

export default watchAllDev;