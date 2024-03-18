import sequelize from "../db/dbConfig.js";

const CartItems = sequelize.define("cartItems",{});

sequelize.sync()
.then(()=>console.log("Cart Items created..."))
.catch(err=>console.log(err));

export default CartItems;