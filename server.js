/**
 * static web server for bbpack examples
 */
'use strict';

const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.use(express.static(path.join(__dirname, '')));
app.use('/', (req, res) => {
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>BBPack Demos</title>
        </head>
        <body>
            <h1>BBPack Demos</h1>
            <h3><a href='demo1/index.html'>Demo1: Basic Usage</a></h3>
            <h3><a href='demo2/index.html'>Demo2: Use Libs Pack Feature</a></h3>
            <h3><a href='demo3/index.html'>Demo3: Sourcemap, Uglify And Watch Files' Change</a></h3>
            <h3><a href='demo4/index.html'>Demo4: Custom Browserify's transforms or plugins</a></h3>
            <h3><a href='demo5/index.html'>Demo5: Use With Browsersync (custome afterPipes)</a></h3>
        </body>
        </html>
    `);
});

const server = http.createServer(app);
server.on('error', (err) => {
    switch (err.code) {
        case 'EACCES':
            console.log('no permission');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`the ${ port } is used by other process`);
            process.exit(1);
            break;
        default:
            console.log('do nothing');
            break;
    }
});
server.on('listening', () => {
    console.log(`listening: ${ port }`);
});
server.listen(port);