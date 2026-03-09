# 02 - Node.js Modules

This folder demonstrates how **modules work in Node.js** using the CommonJS module system.

## Concepts Covered

* Every file in Node.js is treated as a module
* Exporting values and functions
* Importing modules using `require()`
* Encapsulation of code
* Executing code from required modules

---

# Files Overview

## names.js

Exports two variables:

* Jhonas
* Martha

Example:

```javascript
const jhonas = "Jhonas"
const martha = "Martha"

module.exports = { jhonas, martha }
```

---

## utils.js

Exports a reusable function.

```javascript
function sayHi(name) {
  console.log(`Hello there ${name}`)
}

module.exports = sayHi
```

---

## alternative-flavor.js

Shows an alternative way of exporting multiple values from a module.

```javascript
module.exports.items = items
module.exports.singlePerson = person
```

---

## mind-grenade.js

This module runs immediately when required.

It calculates and prints the sum of two numbers.

---

## module-basics.js

Main file that imports all modules and executes the program.

```bash
node module-basics.js
```

---

# Example Output

```
The sum is 15
{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
Hello there Jhonas
```

---

# What I Learned

* Node.js module system (CommonJS)
* Exporting and importing modules
* Structuring code into reusable files
* Module execution behavior

---

This is part of my Node.js learning journey.
