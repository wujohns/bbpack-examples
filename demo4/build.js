/**
 * Demo4: Custom Browserify's transforms or plugins
 */
'use strict';

const BBPack = require('bbpack');
const lessModulesify = require('less-modulesify');
const babelify = require('babelify');

const bbpack = new BBPack({
	transforms: [
		{
            plugin: lessModulesify,
            config: {
                sourceMap: true,
                lessCompileOption: {}
            }
        },
        {
            transform: babelify,
            config: {
                presets: ['es2015', 'react', 'stage-3']
            }
        }
	]
});

bbpack.pagesPack({
    pages: [
        { path: './dist/bundle.js', parts: ['./src/*.js'] }
    ]
});