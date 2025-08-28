import clean from 'gulp-clean';
import fs from 'fs';

const cleanAllDev = (cb) => {
    if (fs.existsSync(myApp.path.devFolder)) {
        return myApp.gulp
            .src(myApp.path.devFolder, { read: false })
            .pipe(clean({ force: true }));
    };
    cb();
};

export default cleanAllDev;