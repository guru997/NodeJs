let http = require('http');
let fs = require('fs');

    var server = http.createServer(function(req,res)
    {
        console.log('request made by' + req.url);
        res.writeHead(200,{'content-type': 'Text/plain'});
        let writestream = fs.createReadStream(__dirname + '/reame.txt','utf8') 
        writestream.pipe(res);      // pipe is done in this code
    });
    
    server.listen(3000,'127.0.0.1');
    console.log('Now you listening port 3000')
