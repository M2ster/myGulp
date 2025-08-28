const devFolder = `./dist`;
const srcFolder = `./src`;
const buildFolder = `./build`;

const path = {
    src: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        img: `${srcFolder}/img/**/*`,
        fonts: `${srcFolder}/fonts/**/*.ttf`,
        files: `${srcFolder}/files/**/*`,
        js: `${srcFolder}/js/*.js`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        img: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
        js: `${buildFolder}/js/`,
    },
    dev: {
        html: `${devFolder}/`,
        css: `${devFolder}/css/`,
        img: `${devFolder}/img/`,
        fonts: `${devFolder}/fonts/`,
        files: `${devFolder}/files/`,
        js: `${devFolder}/js/`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        img: `${srcFolder}/img/**/*`,
        files: `${srcFolder}/files/**/*`,
        js: `${srcFolder}/js/**/*.js`,
    },
    srcFolder: srcFolder,
    devFolder: devFolder,
    buildFolder: buildFolder,
};

export default path;