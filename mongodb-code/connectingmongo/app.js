import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("server started..");
})