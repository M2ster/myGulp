import browserSync from 'browser-sync';
browserSync.create();


const serverSettings = {
    server: {
        baseDir: './dist'
    },
    port: 3000,
    notify: false,
    open: true
}

const startServerDev = () => {
    browserSync.init(serverSettings);
};

export default startServerDev;