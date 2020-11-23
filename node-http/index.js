const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 80;

var notFoundPage = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>File not found!</h1></body></html>');
};

const server = http.createServer( (req, res) => {

    console.log('Request for ' + req.url + ' by method ' + req.method);

    if(req.method == 'GET') {

        var fileUrl = '';
        if(req.url == '/') {
            fileUrl = '/index.html';
        }
        else {
            fileUrl = req.url;
        }

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html') {

            fs.exists(filePath, (exists) => {
                if(!exists) {
                    notFoundPage(res);
                    return;
                }

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');

                fs.createReadStream(filePath).pipe(res);
            });
        }
        else {
            notFoundPage(res);
            return;
        }
    }

} );

server.on('listening', () => {

    console.log(`Server running at http://${hostname}:${port}`);

});

server.listen(port);