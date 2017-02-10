/**
 * Demo1: Basic Usage
 */
'use strict';

const BBPack = require('bbpack');
const bbpack = new BBPack();

bbpack.pagesPack({
    pages: [
        /**
         * you can also use like this:
         * { path: './dist/bundle.js', parts: ['./src/src1.js', './src/src2.js'] }
         */
        { path: './dist/bundle.js', parts: ['./src/*.js'] }
    ]
}, () => {
    console.log('Build Success');
});