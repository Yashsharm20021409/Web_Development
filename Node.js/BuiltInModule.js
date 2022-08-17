const fs = require("fs");
// utf-8 = encoding
console.log("read content of the files");
let text = fs.readFileSync("fs.txt","utf-8");
console.log(text);
text = text.replace("module","Built in Module");

console.log("Creating a New file");
// file name,content variable you want to store
fs.writeFileSync("Yash.txt",text);