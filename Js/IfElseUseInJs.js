console.log("Learn about If-Else in js");

const a = 15;

if(a != 90){
    console.log("Age is 90");
}
// === means types of var and its value both will get check
else if(a === 65){
    console.log("Age is 65");
}
// !== value and type not equal
else if(a !== 65){
    console.log("value and type not equal");
}
else{
    console.log("Age is not 90 and 65");
} 

// to check var is exit or not

const vari = 45;
if(typeof vari !== 'undefined'){
    console.log("vari is defined");
}
else{
    console.log("vari is not defined");
}

// boolean and conditional opt

const doesDrive = true;
const lic = true;

if((doesDrive && a> 18) && lic ){
    console.log("You can drive");
}
else{
    console.log("You are not eligible to drive");
}

// Ternanry opt var == "value" ? true(print) :false(print)

console.log(a == 15 ? 'age is 15' : 'age is 45');

// switch case
switch (a) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}