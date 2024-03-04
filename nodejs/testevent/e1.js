import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("data",()=>{
    console.log("Data event captured....");
});
eventEmitter.on("finish",()=>{
    console.log("Finish event captured...");
});
eventEmitter.on("end",()=>{
    console.log("End event captured...");
});
eventEmitter.on("error",()=>{
    console.log("Error event captured...");
});

eventEmitter.emit("data");
eventEmitter.emit("finish");
eventEmitter.emit("end");
eventEmitter.emit("error");