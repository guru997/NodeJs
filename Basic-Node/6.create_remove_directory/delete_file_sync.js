let fs = require('fs');


//<!=======================To delete a empty folder ===================!>

fs.rmdir('file_name',function(err)
{
    if(err)
    {
        console.log("error");
    }
    else
    {
        console.log('file deleted')
    }
});


//<!=======================To delete a folder containing a file ===================!>
fs.unlink('./file_name/writeme.txt',function(err)
{
    if(err)
    {
        console.log("error while deleting file");
    }
    else
    {
        fs.rmdir('file_name',function(err)
        {
            if(err)
            {
                console.log("error while deleting folder");
            }
            else
            {
                console.log('folder and file deleted successfully');
            }
        })
    }
});
