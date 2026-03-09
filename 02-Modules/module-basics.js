// CommonJS , every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./names.js");
const sayHi = require("./utils.js");
const data = require("./alternative-flavor.js")
require("./mind-grenade.js")


console.log(data);
sayHi(names.jhonas);