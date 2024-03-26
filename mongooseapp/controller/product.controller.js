import { Product } from "../model/product.model.js"

export const saveInBluk = (request,response,next)=>{
    Product.insertMany(request.body.products)
    .then(result=>{
        return response.status(200).json({message: "All product saved..."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    })
}

export const list = (request,response,next)=>{
    Product.find()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}
export const deleteProduct =async  (request,response,next)=>{
   try{ 
    let id = request.params.id;
    let product = await Product.findOne({id});
    if(product){
      await Product.deleteOne({id});
      return response.status(200).json({message: "Product removed"});
    }
    return response.status(401).json({error: "Bad request(id not found)"});
   }
   catch(err){
      return response.status(500).json({error: "Internal server error"});
   } 
}

