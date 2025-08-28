import browserSync from 'browser-sync';
browserSync.create();


const serverSettings = {
    server: {
        baseDir: './build'
    },
    port: 3000,
    notify: false,
    open: true
}

const startServerBuild = () => {
    browserSync.init(serverSettings);
};

export default startServerBuild;