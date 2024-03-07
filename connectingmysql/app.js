import express from "express";
import bodyParser from "body-parser";
import pool from "./dbConfig.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/user/signup",(request,response,next)=>{
   pool.getConnection((err,con)=>{
     if(err){
        console.log(err);
        return response.status(500).json({error: 'Internal Server Error..'});
     }
     else{
        let {username,email,contact,password} = request.body;
        let sql = "insert into user(username,email,password,contact) values(?,?,?,?)";
        con.query(sql,[username,email,password,contact],(err,result)=>{
           if(err){
            console.log(err) ;
            return response.status(500).json({error: "Internal Server Error"});
           }
             else
             return response.status(200).json({message: "Sign up success"});  
        });
     }
   });
});

app.listen(3000,()=>{
    console.log("Server Started....");
})