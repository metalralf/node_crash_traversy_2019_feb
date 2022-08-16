const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log('free: ' + os.freemem()/1024/1024/1024 + ' total: ' + os.totalmem()/1024/1024/1024);
console.log(os.homedir());
console.log(os.uptime());