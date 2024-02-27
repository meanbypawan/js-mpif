class J5{
    recevingCall(){
        console.log("Call Recevied...");
    }
    rejectingCall(){
        console.log("Call Rejected....");
    }
}

class J7 extends J5{
   camera(){
    console.log("Camera onn....");
   }
}

let j7 = new J7();
j7.recevingCall();
j7.rejectingCall();
j7.camera();