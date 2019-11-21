let express = require('express');

let app = express();

app.get('/',function(req,res)
{
    res.send('this is hom page');
});

app.get('/contact',function(eq,res){
    res.send('this is contact us page');
});

app.listen(3000);

