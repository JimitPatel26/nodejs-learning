const fs = require('fs')

var first = fs.readFileSync("first.txt","utf-8");
var second = fs.readFileSync("second.txt","utf-8");
console.log(first);
console.log(second);

fs.writeFileSync("result-sync.txt","Here is the Result");

fs.appendFileSync("result-sync.txt","\nHere is another one");

var result = fs.readFileSync("result-sync.txt","utf-8");
console.log(result);
