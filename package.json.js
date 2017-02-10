/**
 * bbpack usages examples
 */
'use strict';

const packageConfig = {
    // 基础说明配置
    name: 'bbpack-examples',
    version: '0.0.1',
    author: 'wujohns',
    description: 'bbpack usages examples',
    homepage: 'https://github.com/wujohns/bbpack-examples',
    license: 'MIT',

    engine: {
        node: '>=4.0.0'
    },

    /**
     * 程序运行依赖
     */
    dependencies: {
        // basic utils
        'gulp': '~3.9.1',
        'bbpack': '*',

        // browserify's transform or plugin
        'less-modulesify': '^1.0.10',       // css module feature for less
        'babelify': '~7.3.0',               // babel for browserfiy
        'babel-preset-es2015': '~6.18.0',   // es6 support
        'babel-preset-react': '~6.16.0',    // react support
        'babel-preset-stage-3': '~6.17.0',  // es7 support(stage-3)

        // server
        'browser-sync': '^2.18.7',      // auto browser reload
        'express': '~4.14.1',           // used as static http server

        // code for browser
        'react': '^15.3.2',
        'react-dom': '^15.3.2'
    }
};

const fs = require('fs');
const ws = fs.createWriteStream('./package.json', {
    encoding: 'utf8',
    flags: 'w',
    mode: '666'
});
ws.end(JSON.stringify(packageConfig, null, 2));