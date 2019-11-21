var http = require('http');

var server = http.createServer(function(req,res)
{
    console.log('request made by' + req.url);
    res.writeHead(200,{'content-type': 'Text/plain'});
    res.end('hello world');
});

server.listen(3000,'127.0.0.1');
console.log('Now you listening port 3000')
