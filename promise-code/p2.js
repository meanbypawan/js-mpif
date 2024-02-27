class Addition{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        console.log("Addition : "+(this.a+this.b));
    }
}

let obj = new Addition(20,10);
obj.add();