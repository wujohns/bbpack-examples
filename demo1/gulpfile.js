/**
 * Demo1: Basic Usage
 */
'use strict';

const gulp = require('gulp');
const BBPack = require('bbpack');
const bbpack = new BBPack();

gulp.task('build', (callback) => {
    bbpack.pagesPack({
        pages: [
            /**
             * you can also use like this:
             * { path: './dist/bundle.js', parts: ['./src/src1.js', './src/src2.js'] }
             */
            { path: './dist/bundle.js', parts: ['./src/*.js'] }
        ]
    }, callback);
});