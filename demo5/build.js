/**
 * Demo5: Use With Browsersync (custome afterPipes)
 */
'use strict';

const BBPack = require('bbpack');
const browserSync = require('browser-sync');
browserSync.init({
	proxy: {
        target: '127.0.0.1:80'      // target sever(need run it first)
    },
    ghostMode: {                   
        clicks: true,       // click sync（default true）
        scroll: true,       // scroll sync（default true）
        forms: true         // form input sync（default true）
    }
});
const bbpack = new BBPack({
	watch: true,
	afterPipes: [{
		stream: browserSync.stream,
		config: {stream: true}
	}]
});

bbpack.pagesPack({
    pages: [
        { path: './dist/bundle.js', parts: ['./src/*.js'] }
    ]
});