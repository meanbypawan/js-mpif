const roomCleaning = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          //resolve("Room Cleaned....");
         reject("Room not cleaned..");
      }, 2000);
    });
}

const removingGarbage = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve("Garbage removed....");
      }, 1000);
    });
}

Promise.all([roomCleaning(),removingGarbage()])
.then(result=>{
    console.log(result[0]+"\n"+result[1]);
    console.log("Got an ice-cream");
})
.catch(reject=>{
    console.log(reject);
    console.log("lost an ice-cream")
});




