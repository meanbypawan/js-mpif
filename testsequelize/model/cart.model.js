import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Cart = sequelize.define("cart",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    }
});
sequelize.sync()
.then(()=>console.log("Cart Table created..."))
.catch((err)=>{console.log(err)});
export default Cart;