// Основной модуль
import gulp from 'gulp';


// Импорт настроек путей
import path from './gulp/config/path.js';


// Глобальный обьект для всего проекта
global.myApp = {
    gulp: gulp,
    path: path,
};


// Импорт функций для разработки
import copyHtmlDev from './gulp/tasks/dev/html-dev.js';
import copyScssDev from './gulp/tasks/dev/styles-dev.js';
import copyImageDev from './gulp/tasks/dev/images-dev.js';
import startServerDev from './gulp/tasks/dev/server-dev.js';
import cleanAllDev from './gulp/tasks/dev/clean-dev.js';
import watchAllDev from './gulp/tasks/dev/watch-dev.js';
import fontsDev from './gulp/tasks/dev/fonts-dev.js';
import copyFilesDev from './gulp/tasks/dev/files-dev.js';
import copyJsDev from './gulp/tasks/dev/js-dev.js';

// Основые таски для разработки
gulp.task('html:dev', copyHtmlDev);
gulp.task('scss:dev', copyScssDev);
gulp.task('image:dev', copyImageDev);
gulp.task('start:dev', startServerDev);
gulp.task('clean:dev', cleanAllDev);
gulp.task('watch:dev', watchAllDev);
gulp.task('fonts:dev', fontsDev);
gulp.task('copy:dev', copyFilesDev);
gulp.task('js:dev', copyJsDev);

// Dev task
gulp.task('dev', gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'scss:dev', 'image:dev', 'fonts:dev', 'copy:dev', 'js:dev'),
    gulp.parallel('start:dev', 'watch:dev'),
));


// Импорт функций для отдачи заказчику
import cleanAllBuild from './gulp/tasks/build/clean-build.js';
import copyFilesBuild from './gulp/tasks/build/files-build.js';
import fontsBuild from './gulp/tasks/build/fonts-build.js';
import copyHtmlBuild from './gulp/tasks/build/html-build.js';
import copyImageBuild from './gulp/tasks/build/images-build.js';
import copyJsBuild from './gulp/tasks/build/js-build.js';
import startServerBuild from './gulp/tasks/build/server-build.js';
import copyScssBuild from './gulp/tasks/build/styles-build.js';


// Основые таски для отдачи заказчику
gulp.task('html:build', copyHtmlBuild);
gulp.task('scss:build', copyScssBuild);
gulp.task('image:build', copyImageBuild);
gulp.task('start:build', startServerBuild);
gulp.task('clean:build', cleanAllBuild);
gulp.task('fonts:build', fontsBuild);
gulp.task('copy:build', copyFilesBuild);
gulp.task('js:build', copyJsBuild);

// Build task
gulp.task('build', gulp.series(
    'clean:build',
    gulp.parallel('html:build', 'scss:build', 'image:build', 'fonts:build', 'copy:build', 'js:build'),
    gulp.parallel('start:build'),
));