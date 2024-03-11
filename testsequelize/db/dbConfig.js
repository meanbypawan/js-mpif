import { Sequelize } from "sequelize";

const sequelize = new Sequelize("userdb","root","",{
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("Database connected....");
}).catch(err=>{
    console.log(err);
    console.log("Database connection failed...");
})
export default sequelize;