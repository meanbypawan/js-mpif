
/*
  class Promise{
    constructor(callback){

    }
    then(){
        return this;
    }
    catch(){
        return this;
    }
    race(){}
    all(){}
    allSettled(){}
  }
*/
let p = new Promise((resolve,reject)=>{
   //resolve(100);
   reject(404);
});

p.then((resolvedValue)=>{
    console.log("Promise Resolved...."+resolvedValue);
}).catch((rejectValue)=>{
    console.log("Promise is rejected....."+rejectValue);
});











