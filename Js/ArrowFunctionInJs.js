console.log("Learn about arrow function is js");

// function greet(){
//     console.log("Good Morning");
// }
// greet();

let greet = ()=>{
    console.log("Good Morning");
}
greet();

// shortcut to create function inside the timeout using arrow opt

setTimeout(() => {
    console.log("we are inside setTimeout function")
}, 3000);

// one more example shortcut way using arrow function

let sum = (a,b) =>{
    return a+b;
}

d = sum(5,6);

// shortcut to do so

let sum2 = (a,b)=> a+b;

c = sum2(6,7);
console.log(c,d);

let half = a => a/2;
e = half(4);
console.log(e);

let greet1 = () => console.log("Good to see you...");
greet1();

// Arrow function in object

// due to all this issue (this) is also known as lexical this

let Myobj = {
    greeting : "Good Morning",
    names : ["yash","Love","Aashi","skill"],
    func(){
        // this.names means object point to itself
        this.names.forEach((student) =>{
            console.log('Hi! '+this.greeting +" " +student);
        })
    }
}
Myobj.func();

let Myobj1 = {
    greeting : "Good Morning",
    names : ["yash","Love","Aashi","skill"],
    func(){
        // this.names means object point to itself
        // in this case this.greeting gives undefined because function search for greeting inside function not in object
        this.names.forEach(function s(student){
            console.log('Hi! '+this.greeting +" " +student);
        })
    }
}

Myobj1.func();