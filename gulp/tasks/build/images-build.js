import imagemin from "gulp-imagemin";
import webp from 'gulp-webp';

const copyImageBuild = () => {
    return myApp.gulp
        .src(myApp.path.src.img, { encoding: false })
        .pipe(webp())
        .pipe(myApp.gulp.dest(myApp.path.build.img))
        .pipe(myApp.gulp.src(myApp.path.src.img, { encoding: false }))
        .pipe(imagemin({ verbose: true }))
        .pipe(myApp.gulp.dest(myApp.path.build.img));
};

export default copyImageBuild;