import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname,"public")));
mongoose.connect("mongodb://localhost:27017/mongoapp")
.then(result=>{
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   
   app.use("/user",UserRouter);
   app.use("/category",CategoryRouter);
   app.use("/product",ProductRouter);
   app.use("/cart",CartRouter);
   app.listen(3000,()=>{
    console.log("Server started....");
   })
}).catch(err=>{
    console.log(err);
})