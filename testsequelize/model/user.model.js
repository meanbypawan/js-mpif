import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcrypt from "bcryptjs";
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
        set(value) {
           let saltKey = bcrypt.genSaltSync(10);
           let encryptedPassword = bcrypt.hashSync(value,saltKey); 
           this.setDataValue('password', encryptedPassword);
        }
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

User.checkPassword = (originalPassword,encryptedPassword)=>{
    return bcrypt.compareSync(originalPassword,encryptedPassword);
}
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






