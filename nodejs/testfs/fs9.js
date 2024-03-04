import fs from "fs";

console.log("At the start....");

const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("result.txt");
readStream.pipe(writeStream);

console.log("operation success.....");
console.log("At the end...");
