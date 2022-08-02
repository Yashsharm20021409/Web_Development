console.log("String Methods")
const name  = 'Yash';
const gretting = 'Good Morning';
console.log(gretting +" " +name);

let html;
html = "<h1> Hi this is yash </h1> ";

// concate string

html = html.concat("Hope you all are good","i am here yash");
console.log(html.length);
// console.log(html.toLowerCase);
// console.log(html.toUpperCase);

// Also indexing from 0 to length-1
console.log(html[0]);

// if there are same word in string it gives you the first occurance
console.log(html.indexOf('is'));

// if there are same word in string it gives you the last occurance
console.log(html.lastIndexOf("yash"));

console.log(html.charAt(3));
console.log(html.endsWith("yash"));
console.log(html.includes('is'));
console.log(html.substring(2,7)); // space all count 2nd include 7th pos is not include in substring
console.log(html.slice(0,4));
// imp
console.log(html.split(' ')); // gives you array of the string
console.log(html.replace('yash','Yash sharma')); // replace first occurance

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
              <h1> This is Heading </h1>
              <p> you like ${fruit1} and ${fruit2}

            `;
document.body.innerHTML = myHtml

// Practice

let name1 = "yash";
let name2 = "Love";
let name3 = "abc";

let mydoc = `<h1> These are String Methods </h1>
            <p> Hope you all are fine and doing great </p>
            <p> This side i am '${name1}' and they are my frinds '${name2}','${name3}'. </p>
            `;

document.body.innerHTML = mydoc;