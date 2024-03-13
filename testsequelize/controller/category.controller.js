import Category from "../model/category.model.js";

export const getCategory = (request,response,next)=>{
    Category.findAll()
    .then(result=>{
        return response.status(200).json({categories: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const saveInBulk = async (request,response,next)=>{
  try{ 
   let categoryList = request.body;
   for(let category of categoryList){
      await Category.create({categoryName: category});
   }
   return response.status(200).json({message: "All category saved.."});  
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  } 
}