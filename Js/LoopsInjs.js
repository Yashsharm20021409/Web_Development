console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;  // it will skip 6
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// console.log("For each loop used")
// arr.forEach(function(element){
//     console.log(element);
// });

console.log("For each loop used")
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});

let obj = {
    name : "yash",
    age:20,
    type:"programmer",
    os:"window"
}

for(let key in obj){
    console.log(`The ${key} of the object is ${obj[key]}`);
}

console.log('done');