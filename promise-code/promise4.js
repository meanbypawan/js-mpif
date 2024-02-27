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
first(10)
.then((resolvedValue)=>{return second(resolvedValue)})
.then((resolvedValue)=>{return third(resolvedValue)})
.then((resolvedValue)=>fourth(resolvedValue));
/*
first(10).then((resolvedValue)=>{
    second(resolvedValue)
    .then((resolvedValue)=>{
        third(resolvedValue)
        .then((resolvedValue)=>{
            fourth(resolvedValue);
        })
    })
})
*/










