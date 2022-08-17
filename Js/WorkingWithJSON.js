let myObj = {
    name:'yash',
    subject:'CSE',
    fruit:'Mango',
    friend:'No-one'
};

console.log(myObj);

// to print this in the foem of string

let myObj1 = JSON.stringify(myObj);
console.log(myObj1);

// now after converting object into string using stringfy you can apply all string function on them
myObj1 = myObj1.replace('yash',"Yash Sharma");
console.log(myObj1);

// parse take a valid json string as input and gives object as output

let newmyObj = JSON.parse(myObj1);
console.log(newmyObj);