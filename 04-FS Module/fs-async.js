const fs = require('fs');

// fs.readFile('first.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.writeFile("result-async.txt","Here is the Output for Async !!",(err)=>{
//     console.log(err?err:"Written Successful");
// })

console.log("Starting Task 1");
fs.readFile('first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    fs.readFile('second.txt',"utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        fs.writeFile("result-async.txt",`Here is the Result : ${first} , ${second}`,(err,result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log("Done with task 1");
        })
    })
})
console.log("Starting Task 2");