    let express = require('express');


    let app = express();

    app.set( 'view engine' , 'ejs');

    app.get('/',function(req,res)
    {
        res.render('index');
    });

    app.get('/contact',function(req,res)
    {
        res.render('contact');
    });



    app.get('/profile/:id',function(req,res)
    {
        var data = {age:29 , job : 'programmer',hobbies: ['eating','swimming','gamer']}
        res.render('profile', {person:req.params.id, data : data})
    });


    app.listen(3000);
