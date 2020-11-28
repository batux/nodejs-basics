const express = require('express');
const http = require('http');

const hostname = 'localhost';
const portno = 80;

const app = express();

app.use( (req, res, next) => {

    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Express Server!</h1></body></html>');

} );


const server = http.createServer(app);

server.on('listening', () => {

    console.log(`Server running at http://${hostname}:${portno}`);

});

server.listen(portno);