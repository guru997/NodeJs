let http = require('http');
let fs = require('fs');

    var server = http.createServer(function(req,res)
    {
        console.log('request made by' + req.url);
        res.writeHead(200,{'content-type': 'application/json'});
        var myobj = 
        {
            name : 'guru',
            job : 'programmer'
            
        }
        res.end(JSON.stringify(myobj));
    });

    
    
    server.listen(3000,'127.0.0.1');
    console.log('Now you listening port 3000')
