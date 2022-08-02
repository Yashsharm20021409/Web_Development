// Arrays in js
console.log("Array and objects in js");

const marks = [34,56,78,90];
const fruits = ["Apple","orange","pineapple"];
const mix = [45,89,'f',"Apple"];


console.log("Create array with the help of array constructor");

const arr = new Array(34,67,89,"Orange");
console.log(mix);
console.log(marks);
console.log(fruits);
console.log(arr);

// Array indexing also start from 0
console.log(arr[3]);
console.log(arr.length);
console.log(Array.isArray(arr));
console.log(Array.isArray('jfh'));

arr[0] = 'yash';
let arrelement = arr[0];
console.log('element :', arrelement);
console.log(arr);

let value = marks.indexOf(78);
console.log(value);

// mutating the array NOTE:- on appling method note original array get affected

marks.push(45); // push at end of an array
marks.unshift(455); // push at first pos
console.log(marks)

marks.pop(45); // pop from end of an array
marks.shift(455); // pop from first pos
console.log(marks)

// splice del ele from ind 1 to 3 and both values include 1,3
// marks.splice(1,2)
marks.reverse();
console.log(marks)

let marks2 = [3,4,5,6];
console.log(marks.concat(marks2));

// How to create OBJECTS IN JS

let myObj = {
    name:'yash',
    channel:'CodeWithYash',
    isActive:true,
    mark:[1,2,3,4]
}

console.log(myObj);
console.log(myObj.mark);
console.log(myObj.isActive);

//another way it just a key :pair 
let myObj1 = {
    "name":'yash',
    "channel":'CodeWithYash',
    "isActive":true,
    mark:[1,2,3,4]
}

console.log(myObj1);
console.log(myObj1[mark]);
console.log(myObj[isActive]);