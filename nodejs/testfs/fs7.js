/*
   fs
    a. writeFile(), writeFileSync()
    b. readFile(),  readFileSync()
   
   Stream
    a. Readable
    b. Writable 

*/
import fs from "fs";

console.log("At the start.....");

const writeStream = fs.createWriteStream("pqr.txt");
writeStream.write("It is write Stream");
writeStream.end();

writeStream.on("error",(err)=>{
    console.log(err);
});

writeStream.on("finish",()=>{
    console.log("Operation success......");
});
console.log("At the end......");









