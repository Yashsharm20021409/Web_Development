/*
    Synchronous or blocking

// - line by line execution
    --> in perivous file we read a file with the help of readsync(sync = synchronous) function not that thing is 
        belong to this category means execution of nextLine only take palace if execution of readsync function is 
        cmplt without any error
*/
const fs = require("fs");

console.log("read content of the files");
let text = fs.readFileSync("fs.txt","utf-8");
console.log(text);
/*
    Asynchronous or non-blocking

// - line by line execution not guaranteed
// - callbacks will fire

    --> in this case we readfile withthe help of readfile function
*/

// throw error because it want one call back function

// const fs = require("fs");
// console.log("read content of the files");
// let text1 = fs.readFile("fs.txt","utf-8");
// console.log(text1);

// print error if get or data(content)
const fs1 = require("fs");
console.log("read content of the files");
let text1 = fs1.readFile("fs.txt","utf-8",(err,content) =>{
    console.log(err,content);
});
console.log("This is a message");

/*  Note:-Notice one thing (this is a message ) print before the err,content this is because when fs.txt 
      file is in reading process then program will continuing in execution form that is reason that message 
      print before this and when reading task is finish then call back function will(or func get fire) print 
      the data

      ---> with this asynchronous behaviour you can tackle all this kind of error( means to avoid blocking of call
        and affect execution of program)
*/