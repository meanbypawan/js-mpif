import { Cart } from "../model/cart.model.js";
export const removeFromCart = (request,response,next)=>{
   let {userId,productId} = request.body;
   Cart.updateOne({userId},{
    $pull:{cartItems:{productId}}
   })
   .then(result=>{
    if(result.modifiedCount)
      return response.status(200).json({message: "Item removed from cart"});
    return response.status(401).json({error: "Bad request (Id not found)"});  
   })
   .catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   });
}
export const fetchCart = (request,response,next)=>{
    let userId = request.params.userId;
    Cart.find({userId}).populate("userId").populate("cartItems.productId")
    .then(result=>{
        console.log(result);
        return response.status(200).json({cart: result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const addToCart = async (request,response,next)=>{
    try{
      let {userId,productId} = request.body;
      let cart = await Cart.findOne({userId});
      if(cart){
         let status = cart.cartItems.some((product)=>product.productId==productId);
         if(status)
           return response.status(200).json({message: "Product already added in cart.."});
         
         cart.cartItems.push({productId});
         await cart.save();
         return response.status(200).json({message: "Product successfull added in cart"});  
      }
      else{
        // very first time user performing add to cart
        cart = await Cart.create({userId,cartItems:[{productId}]});
        return response.status(200).json({message: "Product added in cart", cart: cart});
      }
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    }
}