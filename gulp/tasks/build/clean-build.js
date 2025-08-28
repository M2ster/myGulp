import clean from 'gulp-clean';
import fs from 'fs';

const cleanAllBuild = (cb) => {
    if (fs.existsSync(myApp.path.buildFolder)) {
        return myApp.gulp
            .src(myApp.path.buildFolder, { read: false })
            .pipe(clean({ force: true }));
    };
    cb();
};

export default cleanAllBuild;