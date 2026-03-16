const fs = require('fs')

fs.readFile("notes.txt","utf-8",(err,result)=>{
    if(err){
        console.log("File Not Found !");
    }
    else{
        console.log(result);
    }
})