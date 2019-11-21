let counter = (array) =>
{
    return 'There are ' + array.length + 'elements';
}

 adder = (a,b) =>
{
    console.log('The sum of a & b is ' + `${a+b}`);
}

let pi = 3.14;
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
