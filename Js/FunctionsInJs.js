console.log("Learn about user define function in js")

function greet(name,thanks){
    console.log(`Hi Happy birthday ${name} enjoy your day and do your best to achive what you want work harder for more success best wishes ${thanks}`);
}
function sum(a,b){
    let sum = a+b;
    return sum;
}
// function with return value

const name = 'yash';
greet(name,'All the Best');

console.log(sum(5,6));

// user define function using variable

const mygreet = function(){
    console.log("good to see you");
}

mygreet();

// create function inside the object

const obj = {
    name:"yash",
    game:function(){
        return "GTA";
    }
}

console.log(obj.game());

arr = ['fruit','Num','good']

arr.forEach(function(element,index,array){
    console.log(element,index,array);
});


// let/const has a block level scope while var has a function level scope(and became global variable)
// change let to var (i) in if condition you will understand let/const and var

if(1){
    var i =234;
    // let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)   