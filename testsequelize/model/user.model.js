import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const User = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact: DataTypes.STRING
});

sequelize.sync()
.then(()=>{
    console.log("User Table created...");
}).catch(err=>{
    console.log(err);
    console.log("User table not created..");
});

export default User;

/*
   Sequelize model turns into model class and it will also
   provide interface to interact with database
   
   User.findAll()
   User.findOne()
   User.create()
   User.destroy()
   .....
   .....
*/






