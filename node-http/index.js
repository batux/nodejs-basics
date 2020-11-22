const http = require('http');

const hostname = 'localhost';
const port = 80;


const server = http.createServer( (req, res) => {

    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello Node JS!</h1></body></html>');
} );

server.on('listening', () => {

    console.log(`Server running at http://${hostname}:${port}`);

});

server.listen(port);