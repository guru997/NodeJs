let module_pattern = require('./module_pattern');

console.log(module_pattern.counter(['hai','hello','bye']));
console.log(module_pattern.adder(5,6));
console.log(module_pattern.adder(module_pattern.pi,10));
