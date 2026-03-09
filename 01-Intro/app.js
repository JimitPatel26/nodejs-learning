// GLOBALS - No Window !!!

// __dirname - path to current directory
// __filname - file name
// require - function to use modules (CommonJS)
// module - info about the current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("Hello World")
}, 1000);