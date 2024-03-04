import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.once("test",()=>{
    console.log("Test event captured...");
});

eventEmitter.on("demo",()=>{
  console.log("Demo event captured...");
});

eventEmitter.emit("test");

eventEmitter.emit("demo");
eventEmitter.emit("demo");
eventEmitter.removeAllListeners("demo");
eventEmitter.emit("demo");
//eventEmitter.emit("test");