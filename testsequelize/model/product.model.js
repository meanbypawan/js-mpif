import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discountPercentage: DataTypes.FLOAT,
    rating: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    categoryname: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    images: DataTypes.STRING(1000)
});

sequelize.sync()
.then(()=>{
    console.log("Product table created...");
}).catch(err=>{
    console.log(err);
});

export default Product;
