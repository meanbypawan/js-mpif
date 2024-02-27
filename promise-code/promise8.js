const first = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("First executed...."+n); 
            resolve(n+2);
        },5000)
    });
}
const second = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Second Executend...."+n);
            resolve(n+2);
        },3000);
    });
}
const third = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Third Executend...."+n);
            resolve(n+2);
        },3000);
    });
}
const fourth = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Fourth Executend...."+n);
            resolve(n+2);
        },3000);
    });
}

async function executeTask(){
   let result = await first(10);
   result = await second(result);
   result = await third(result);
   result = await fourth(result);
}
executeTask();




