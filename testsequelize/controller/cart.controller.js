import { Model } from "sequelize";
import sequelize from "../db/dbConfig.js";
import Cart from "../model/cart.model.js";
import CartItems from "../model/cartItems.model.js";
import Product from "../model/product.model.js";

export const getCartItemList = async (request,response,next)=>{
  try{
    let userId = request.params.userId;
    Cart.findOne({where:{userId}, include:[{
        model: Product
     }
    ]}).then(result=>{
        return response.status(200).json({data: result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Server Error..."});
    })
    
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  }
}
export const addToCart = async (request,response,next)=>{
   try{ 
    let userId = request.body.userId;
    let productId = request.body.productId;

    let cart = await Cart.findOne({where:{userId}});
    const transaction = await sequelize.transaction();
    if(cart){
        // user cart is already created save product into cartItems
        let cartItem = await CartItems.findOne({where:{cartId: cart.id, productId}});
        if(cartItem)
          return response.status(200).json({message: "Product is already added in cart.."});
        await CartItems.create({cartId:cart.id,productId},{transaction});
        await transaction.commit();
        return response.status(200).json({message: "Product successfully added into cart..."}) ; 
    }
    else{
        // first create user cart then save prodict into cartItems
        cart = await Cart.create({userId},{transaction});
        await CartItems.create({cartId:cart.id, productId},{transaction});
        await transaction.commit();
        return response.status(200).json({message: "Product successfully added into cart"}); 
          
    }
   }
   catch(err){
    await transaction.rollback();
    return response.status(500).json({error: "Internal Server Error"});
   } 
}