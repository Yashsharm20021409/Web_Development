console.log("Module.js");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// to make avilable this function outside export this

// module.exports = average;

// or

module.exports = {
    avg:average,
    Name:"Yash",
    Git_rep:"Web_Devlopment"
};

// note:- module.exports itself a package you can assign that object a new key-pair as shown below

module.exports.Name1 = "Sharma ji";