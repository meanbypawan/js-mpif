class Message{
    m1(){
        console.log("m1 executed....");
    }
    m2(){
        console.log("m2 executed....");
    }
    static wish(){
        console.log("Hello Friends....");
    }
}

let obj = new Message();
obj.m1();
obj.m2();
Message.wish();