import fs from "fs";

console.log("At the start......");
try{
 const data = fs.readFileSync("data.txt","utf8");
 console.log(data);
}
catch(err){
    console.log(err);
}

console.log("At the end.....");
