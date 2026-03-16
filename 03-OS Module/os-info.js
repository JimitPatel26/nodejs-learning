const { log } = require("console");
const os = require("os");

// Info About Current User
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log("The System Uptime is "+os.uptime()+" seconds");

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}
console.log(currentOS);