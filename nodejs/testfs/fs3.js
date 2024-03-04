import fs from "fs";

console.log("At the start.....");

fs.readFile("data.txt","utf8",(err,data)=>{
  err ? console.log(err) : console.log(data);
});

console.log("At the end.....");