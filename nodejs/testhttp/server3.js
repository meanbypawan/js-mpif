import http from "http";
import url,{fileURLToPath} from "url";
import fs from "fs";
import path from "path";
/*
  __filename, __dirname
*/
http.createServer((request,response)=>{
    let parsedUrl = url.parse(request.url,true);
    let __filename = fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filename);
    console.log(parsedUrl.pathname);
    if(parsedUrl.pathname == "/" || parsedUrl.pathname == '/home'){
       try{ 
        let indexFilePath = path.join(__dirname,"/views/index.html");
        let data = fs.readFileSync(indexFilePath);
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
       }
       catch(err){
         response.end("Oops! something went wrong...");
       } 
    }
    else if(parsedUrl.pathname == "/about" && request.method=="GET"){
        try{ 
            let aboutFilePath = path.join(__dirname,"/views/about.html");
            let data = fs.readFileSync(aboutFilePath);
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
           }
           catch(err){
             response.end("Oops! something went wrong...");
           }
    }
    else if(parsedUrl.pathname=="/contact" && request.method == "GET"){
        try{ 
            let contactFilePath = path.join(__dirname,"/views/contact.html");
            let data = fs.readFileSync(contactFilePath);
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
            response.end();
           }
           catch(err){
             response.end("Oops! something went wrong...");
           }
    }
    else if(parsedUrl.pathname.match("\.css")){
        let cssFilePath = path.join(__dirname+"/views/"+parsedUrl.pathname);
        let readStream = fs.createReadStream(cssFilePath);
        readStream.pipe(response);
    }
    else if(parsedUrl.pathname.match("\.jpeg") || parsedUrl.pathname.match("\.png")){
        let imageFilePath = path.join(__dirname,"/views/"+parsedUrl.pathname);
        let readStream = fs.createReadStream(imageFilePath);
        readStream.pipe(response);
    }
}).listen(3000,()=>{
    console.log("Server Started...");
})