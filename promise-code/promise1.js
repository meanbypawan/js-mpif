
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
    //resolve();
    reject();
});

p.then(()=>{
    console.log("Promise Resolved....");
}).catch(()=>{
    console.log("Promise is rejected.....");
});











