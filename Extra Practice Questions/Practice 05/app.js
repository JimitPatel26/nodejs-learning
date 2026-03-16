console.log("Task Started")
const fs = require("fs")
let result = fs.readFileSync("source.txt","utf-8");

fs.writeFileSync("copy.txt",result);
console.log("File Copied!");