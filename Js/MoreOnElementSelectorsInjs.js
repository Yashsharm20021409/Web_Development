
let cont = document.querySelector('.no');
cont = document.querySelector('.container');

/* 
   in children and child nodes you will get differnt length check in console 
   because childnodes count comment line + nextLine also with tags but children 
   is not do so during website devlopment we mostly used children
*/
// console.log(cont.childNodes);
// console.log(cont.children);
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[10].nodeType;

// console.log(nodeName)
// console.log(nodeType)

// Important

// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// select childrens of childrens

// total 6 children here as hown in console 2nd line print children[1] that is myfirst div here ka children that is ul here similarly you can do this with all as see below

let conti = document.querySelector('div.container');
// console.log(conti.children);
// console.log(conti.children[1].children);
// console.log(conti.children[1].children[0].children);

// print first child nodes that is text here
// console.log(conti.firstChild);

// print first child element
// console.log(conti.firstElementChild);

// console.log(conti.lastChild);
// console.log(conti.lastElementChild);

// print number of (children) of a conti
// console.log(conti.childElementCount); 

console.log(conti.firstElementChild.parentNode);
console.log(conti.firstElementChild.nextSibling);
console.log(conti.firstElementChild.nextElementSibling);
console.log(conti.firstElementChild.nextElementSibling.nextElementSibling);