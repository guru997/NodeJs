let fs = require('fs');

fs.mkdir('file_name',function(err)
{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log("folder created")
    }
});
