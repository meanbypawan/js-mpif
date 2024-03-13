import Product from "../model/product.model.js";

// localhost:3000/product/:id
export const deletProduct = (request,response,next)=>{
    let id = request.params.id;
    Product.destroy({where: {id}})
    .then(result=>{
        return response.status(200).json({message: "Product deleted..."});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
// localhost:3000/product/:id
export const getProduct = (request,response,next)=>{
   let id = request.params.id;
   Product.findOne({where: {id}})
   .then(result=>{
     return response.status(200).json({product: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   })
}

// localhost:3000/product/list
export const getProductList = (request,response,next)=>{
    Product.findAll().then(result=>{
        console.log(result);
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const saveInBluk = async (request,response,next)=>{
     let productList = request.body.products;
     
     try{
       for(let product of productList){
         let {id,title,description,price,discountPercentage,rating,stock,brand,thumbnail,category} = product;
         let imageArray = "";
         for(let imageUrl of product.images){
            imageArray = imageArray+imageUrl+" ";
         }
         await Product.create({id,title,description,price,discountPercentage,rating,stock,brand,thumbnail,categoryname: category,images: imageArray});
       }
       return response.status(200).json({message: "All Product Saved..."});
     }
     catch(err){
        return response.status(500).json({error: "Internal Server Error"});
     }
     
}