// Problem Statement
// Question 1 — Read & Display
// Create a file notes.txt with any text you like. 
// Then write a program app.js that reads it synchronously and prints its content to the console.
// Expected Output:
// Your notes content here...

const fs = require('fs');

var data = fs.readFileSync("notes.txt","utf-8");
console.log(data);