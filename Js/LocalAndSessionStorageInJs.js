console.log("Learn about local and session storage in js");

localStorage.setItem('Name1','Yash');
localStorage.setItem('Name2','Love');

// to clear local storage (clear entire local storage)
localStorage.clear();
// to remove particular item
localStorage.removeItem('Name2');

// to get data
let getName = localStorage.getItem('Name1');
console.log(getName);

// to store array

// if you direct try to store the array will store in the form of string so we use differ way to do so 
// similarly you can do with object
let impArray = ['a','b','c'];

localStorage.setItem('Arr',JSON.stringify(impArray));

// to print this back as an array
let getName1 = JSON.parse(localStorage.getItem('Arr'));
console.log(getName1);

sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));

// sessionStorage.clear();

// the differ between local and session storage is
// 1. local storage data remain stored if session is out and you closed the browser
// 2. session storage data is clear once session finish orbrowser is closed
