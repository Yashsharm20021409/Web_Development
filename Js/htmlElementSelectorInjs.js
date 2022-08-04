console.log("Learn about Html element selectors in js");

/*
Element selectors

1.single element selector
2.multiple element selector

*/

// single element selcetor
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = "Yash is good at programming";
element.innerHTML = "<b>Yash is good at programming</b>"
// console.log(element);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel);


// 2.multiple element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div')


//print all child of class container[0]
// console.log(elems[0].getElementsByClassName('child')); 
// console.log(elems);

//Important Note:- how to iterate html collection

Array.from(elems).forEach(element=> {
    console.log(element);
    element.style.color = 'lightblue';
})

// another way to do same with simple method

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }

