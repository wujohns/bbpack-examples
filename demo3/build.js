/**
 * Demo3: Sourcemap, Uglify And Watch Files' Change
 */
'use strict';

const BBPack = require('bbpack');
const bbpack = new BBPack({
	sourceMap: true,
	uglify: true,
	watch: true
});

bbpack.pagesPack({
    pages: [
        { path: './dist/bundle.js', parts: ['./src/*.js'] }
    ]
});