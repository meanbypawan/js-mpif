import express from "express";

const app = express();


app.use((request,response,next)=>{
    console.log("Application Level Middleware.....");
    next();
});
app.get("/home",(request,response,next)=>{
    response.end("/home Route Handled...");
});
app.get("/about",(request,response,next)=>{
    response.end("/about route handled...");
});
app.get("/contact",(request,response,next)=>{
    response.end("/contact route handled..");
});
app.get("/add",(request,response,next)=>{
    let a = request.query.a*1;
    let b = request.query.b*1;
  response.end("/add Route..."+(a+b));
});
app.get("/product/:id/:alternateId",(request,response,next)=>{
    let id = request.params.id;
    let aid = request.params.alternateId;
    response.end("/product route : "+id+"  "+aid);
})

app.listen(3000,()=>{
    console.log("Server Started....");
});