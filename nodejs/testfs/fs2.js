import fs from "fs";

console.log("At the start...");

fs.appendFile("data.txt","\nNodeJs is javascript runtime enviornment",(err)=>{
    err ? console.log(err) : console.log("Operation success....");
});

console.log("At the end....");