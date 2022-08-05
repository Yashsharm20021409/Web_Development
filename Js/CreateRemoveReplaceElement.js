// let ele = document.createElement('li');
// let text = document.createTextNode("I am the text node");
// ele.append(text);

// // add class name and id name to the attribute
// ele.className = 'childul';
// ele.id = 'created';
// ele.setAttribute('title','mytitle');
// // ele.innerText = 'Work Hard';
// // // to make bold and serve this as inner html
// // ele.innerHTML = '<b>Work Hard</b>';


// let ul = document.querySelector('ul.this');
// ul.appendChild(ele);
// console.log(ele); 

// let ele2 = document.createElement('h3');
// let text1 = document.createTextNode("This is the heading");

// ele2.id = 'ele2';
// ele2.className = 'ele2';
// ele2.appendChild(text1);

// ele.replaceWith(ele2);

// // above we learn how to add or replace ele using javascript now we will lear how to replace existing ele in html using js

// let myul = document.getElementById('myul');
// // gives child of that container whose id is myul
// myul.replaceChild(ele2,document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));

// // to get the class or id of any object
// let pr = ele2.getAttribute('id');
// pr = ele2.getAttribute('class');
// pr = ele2.hasAttribute('class'); //is it true that ele2 has any class same for id
// // to remove id or class of the element
// ele2.removeAttribute('class');
// console.log(ele2,pr); 


/*
   quick quiz
   create a heading element with text as "Go to CodeWithHarry" 
   and create an <a> tag outside it with href = "https://www.codewithharry.com"
*/

let ele = document.createElement('h3');
let text = document.createTextNode("Go to CodeWithHarray");
ele.append(text);

let div = document.querySelector('div.container')
div.append(ele);

let atag = document.createElement('a');
atag.setAttribute('href','https://www.codewithharry.com');
ele.appendChild(atag);
console.log(ele);