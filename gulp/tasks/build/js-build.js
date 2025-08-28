import webpack from 'webpack-stream';
import webpackSettings from '../../../webpack.config.js';

const copyJsBuild = () => {
    return myApp.gulp.
        src(myApp.path.src.js)
        .pipe(webpack(webpackSettings))
        .pipe(myApp.gulp.dest(myApp.path.build.js))
};

export default copyJsBuild;