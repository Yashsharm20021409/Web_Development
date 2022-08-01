console.log("Intro to JavaScript")
// Variables in javaScript
// using var,let,const keyword

// 1.Var :- Having Global Scope (Global Variable)

var name1 = "Yash";
var name2 = 'yash';
var name3 = 'yash"sharma"';
 
console.log(name1);
console.log(name2);
console.log(name3);

/*
Rules for creating JavaScript Variables

1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/

// 2.Const

const name4 = "yash";
// name4 = "sharma"; Not allowed if you use const Keyword
// const name5 ; also gives error
console.log(name4);


// 3.Let :- Having block-level Scope (Local var) but also works as global but mostly used as to declare local var

{
    let city = 'Hapur';
    console.log(city);
}
// console.log(city); Gives Error
let city1 = 'Hapur';
console.log(city1);


// Example of const

// You can update const array but not redeclare as shown
const arr1 = [23,45,67];
// arr1 = [34,678]; Gives error
arr1.push(45);
console.log(arr1);