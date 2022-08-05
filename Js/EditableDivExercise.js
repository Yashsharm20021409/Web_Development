console.log("Make a editable div");

// create div
let div = document.createElement('div');
div.setAttribute('id','exc');
div.innerText = 'Click To Write';

// insert into body
document.body.appendChild(div);

// take input
let input = document.createElement('input');
div.setAttribute('value','');

// event on div
document.getElementById('exc').addEventListener('dblclick',function(e){
    div.replaceWith(input);
})

// to store in local session

input.addEventListener('blur',function(){
    localStorage.setItem('Data',JSON.stringify(input.value)); 
})

