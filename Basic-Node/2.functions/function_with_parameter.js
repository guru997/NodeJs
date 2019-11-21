
// function with parameter

function  callfunction(func)
{
    func();
}

function hi()
{
    console.log('hi');
}

let bye = function()
{
    console.log('bye');
}

callfunction(hi);
callfunction(bye);
