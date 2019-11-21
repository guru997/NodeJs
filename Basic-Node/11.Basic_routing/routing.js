let http = require('http');
let fs = require('fs');

    var server = http.createServer(function(req,res)
    {
        console.log('request made by' + req.url);

        if(req.url === '/products')
        {
            res.writeHead(200,{'content-type': 'Text/html'});
            fs.createReadStream(__dirname + '/products.html').pipe(res);
        }
        else if(req.url === '/home' || req.url === '/')
        {
            res.writeHead(200,{'content-type': 'Text/html'});
            fs.createReadStream(__dirname + '/index.html').pipe(res);
        }
        else
        {
            res.writeHead(404,{'content-type': 'Text/html'});
            fs.createReadStream(__dirname + '/404.html').pipe(res);
        }
        

    });
    
    server.listen(3000,'127.0.0.1');
    console.log('Now you listening port 3000')
