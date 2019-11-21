let http = require('http');
let fs = require('fs');


let readstream = fs.createReadStream(__dirname + '/reame.txt','utf8');

readstream.on('data', (chunk)=>
{
    console.log('new chnk received');
    console.log(chunk);
})
