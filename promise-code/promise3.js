const f1 = (n)=>{
    return new Promise((resolve,reject)=>{
        n%2 ? reject("Given Number Is ODD") : resolve("Given Number Is Even"); 
    });
}


f1(21).then((resolvedValue)=>{
    console.log(resolvedValue);
}).catch((rejectedValue)=>{
   console.log(rejectedValue);
});