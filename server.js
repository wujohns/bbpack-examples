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