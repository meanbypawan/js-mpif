import fs from "fs";

const readStream  = fs.createReadStream("data.txt");

let fileData = "";

readStream.on("data",(chunk)=>{
    fileData += chunk;
});

readStream.on("end",()=>{
    console.log(fileData);
});

readStream.on("error",(err)=>{
    console.log(err);
})