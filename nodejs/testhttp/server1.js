import http from "http";

const server = http.createServer((request,response)=>{
    response.end("Hello Client....");
});

server.listen(3000,()=>{
    console.log("Sever started...");
})