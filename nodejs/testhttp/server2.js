import http from "http";
import url from "url";
http.createServer((request,response)=>{
    let parsedUrl = url.parse(request.url,true);
    console.log(parsedUrl);
    if(parsedUrl.pathname == "/home" || parsedUrl.pathname == "/")
      response.write("Home Page");
    else if(parsedUrl.pathname == "/about")
      response.write("About Page");
    else if(parsedUrl.pathname == "/gallery")
      response.write("Gallery Page");
    else if(parsedUrl.pathname == '/add'){
        let a = parsedUrl.query.a*1;
        let b = parsedUrl.query.b*1;
        response.write("Addition : "+(a+b));
    }
    response.end();  
})
.listen(3000,()=>{
    console.log("Server Started...");
})