// use module we create in module.js file
console.log("Index.js")

// if the is only a function which you want to import then the variable name must be same as function prsent in module

// const average = require('./module');
// console.log("Sum of the Array: "+average([4,5,6]));

// but is module exports object then you can do like this

const mod = require('./module');
console.log(mod.avg([5,4,6]));
console.log(mod.Git_rep);
console.log(mod.Name);
console.log(mod.Name1);