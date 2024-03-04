import event from "events";

const eventEmitter = new event.EventEmitter();


eventEmitter.on("addition",(a,b)=>{
    let result = a + b;
    console.log("Addition : "+result);
});

eventEmitter.emit("addition",20,15);