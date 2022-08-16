const fs = require('fs');
const path = require('path');

/*fs.mkdir(path.join(__dirname, '/test'), {},  err => {
    if(err) throw err;
    console.log('Folder created...');
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!',  err => {
    if(err) throw err;
    console.log('File written to...');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World once again!',  err => {
    if(err) throw err;
    console.log('File appended...');
});

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8',  (err, data) => {
    if(err) throw err;
    console.log(data);
});*/

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'hello2.txt'),
    (err) => {
        if(err) throw err;
        console.log('File renamed');
    }
);
