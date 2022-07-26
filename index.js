/*
const Person = require('./person');

const person1 = new Person('John Doe', 30);
const person2 = new Person('John Plant', 31);

person1.greeting();
person2.greeting();*/

/*const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
/*    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content);
        });
    }

    if(req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content);
        });
    }

    if(req.url === '/api/users') {
        const users = [
            { name: 'Bob Smithy', age: 40 },
            { name: 'Bob Plant', age: 20 },
            { name: 'Bob TheBuilder', age: 69 },
            { name: 'Bob He', age: 1.21 },
        ];
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users));
    }*/
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);

    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    if (contentType == "text/html" && extname == "") filePath += ".html";

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

    //res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
