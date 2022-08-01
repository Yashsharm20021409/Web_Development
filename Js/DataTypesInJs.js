//Primitive data types in js :- memory allocate in stack

//String 
let name = "Yash";
console.log("My String is "+name);
console.log("Data type is "+ (typeof(name)));

// Number
let num = 24;
console.log("Data type is " +(typeof(num)));

// Boolean
let isDriver = true;
console.log("Data type is "+ (typeof(isDriver)));

//Note:- Null  it is a primitive d.t but show object
let isNull = null;
console.log("Data type is "+ (typeof(isNull)));

// Undefined
let isUndef = undefined;
console.log("Data type is "+ (typeof(isUndef)));


// Reference dataTypes :- Memory allocate in heap

// Arrays
arr = [1,2,3,4,"string",true];
console.log("Data type is "+(typeof(arr)));

// Object literals
let marks = {
    yash: 90,
    love:90,
    abc:80
}
console.log(marks);
console.log((typeof(marks)));

let date  = new Date();
console.log((typeof(date)));