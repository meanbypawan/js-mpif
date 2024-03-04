import fs from "fs";
/*
   Library 
   Synchronous
    a. writeFileSync()
    b. readFileSync()

   Asynchronous
    a. writeFile()
    b. readFile()
*/
console.log("At the the start....");

fs.writeFile("data.txt","NodeJs is single threaded",(err)=>{
    err ? console.log(err) : console.log("Operation success...");
});

console.log("At the end.....");














