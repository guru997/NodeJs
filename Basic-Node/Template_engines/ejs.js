    let express = require('express');


    let app = express();

    app.set( 'view engine' , 'ejs');

    app.get('/profile/:id',function(req,res)
    {
        var data = {age:29 , job : 'programmer'}
        res.render('profile', {person:req.params.id, data : data})
    });


    app.listen(3000);
