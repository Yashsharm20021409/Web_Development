const fs = require("fs");
// utf-8 = encoding
const text = fs.readFileSync("fs.txt","utf-8");
console.log(text);