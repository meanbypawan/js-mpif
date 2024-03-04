import fs from "fs";

/*
   abc.txt   xyz.txt
     
      combined.txt
*/
const readABC = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("abc.txt",(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
}

const readXYZ = ()=>{
    return new Promise((resolve,reject)=>{
      fs.readFile("xyz.txt",(err,data)=>{
        err ? reject(err) : resolve(data);
      })
    });
}

Promise.all([readABC(), readXYZ()])
.then(results=>{
  try{  
   fs.writeFileSync("combined.txt",results[0]+"\n"+results[1]);
   console.log("Operation success....");
  }
  catch(err){
    console.log("Operation failed....");
  } 
}).catch(err=>{
    console.log("Operation Failed...");
    console.log(err);
})










