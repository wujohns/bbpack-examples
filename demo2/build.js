/**
 * Demo2: Use Libs Pack Feature
 */
'use strict';

const BBPack = require('bbpack');
const bbpack = new BBPack();

bbpack.libsPack({
	libs: [
		{ src: 'react', expose: 'react' },
		{ src: 'react-dom', expose: 'react-dom' },
		{ src: './src/selfLib.js', expose: 'selfLib' },
		{ src: './src/style.less', expose: 'style' }
	],
	savePath: './dist/libs.js'
});

bbpack.pagesPack({
	pages: [
		{ path: './dist/bundle.js', parts: ['./src/src.js'] }
	],
	externals: ['react', 'react-dom', 'selfLib', 'style']
});