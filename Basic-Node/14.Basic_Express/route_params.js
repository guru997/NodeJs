let express = require('express');

let app = express();

app.get('/profile/:id',function(req,res)
{
    res.send('you are seeing profile name : ' + req.params.id);
});


app.listen(3000);
