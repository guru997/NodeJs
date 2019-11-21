let http = require('http');
let fs = require('fs');


let writestream = fs.createWriteStream(__dirname + '/writeme.txt')
    writestream.write('hai')
    
