const firstName = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Merry");
      },1000);
    });
}

const middleName = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("John");
      },1500);
    });
}
const lastName = ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        //resolve("Alexan");
        reject("Alexan");
      },800);
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then(resolvedValue=>{
    console.log("Resolved : "+resolvedValue);
})
.catch(rejectedValue=>{
    console.log("Rejectd : "+rejectedValue);
});




