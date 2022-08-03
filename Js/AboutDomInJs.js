console.log('Welcome to tut 12.js');
let a = document;

//display all the tags use in this html file
a = document.all; 

//display body
// a = document.body; 

//display 0th form 
// a = document.forms[0];

// create array of all the tags with the help of document.all

// Array.from(a).forEach(function(element){
//     console.log(element);
// })

// to get all link prsnt here
// a = document.links;
// a = document.links[0];
// a = document.links[0].href;
// console.log(a);

// use document.images and document.scripts and print the list of images and scripts on an html page
a = document.scripts[0];
a = document.images;
console.log(a);
