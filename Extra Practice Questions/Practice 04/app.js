const fs = require("fs");

let result = fs.readFileSync("paragraph.txt",'utf-8');
console.log("Total Words: "+result.split(" ").length);
