import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
export const signIn = async (request,response,next)=>{
   try{ 
    let user = await User.findOne({where:{email: request.body.email}});
    if(user){
      let password = request.body.password;
      if(User.checkPassword(password,user.password)){
        // generate token
        let payload = {subject: user.email};
        let token = jwt.sign(payload,"ddkljfreerrroeuixxcnvnvnreroiedsfldkfvn");
        return response.status(200).json({message: "Sign in success...",user,token});
      } 
      return response.status(401).json({error: "Unauthorized user"}); 
    }
    else
      return response.status(401).json({error: "Unauthorized user..."});
   }
   catch(err){
     return response.status(500).json({error: "Internal Server Error..."});
   }   
}
export const signUp = async (request,response,next)=>{
   try{ 
    const error = validationResult(request);
    if(!error.isEmpty())
      return response.status(400).json({error:"Bad request", errorMessage: error.array()});
    let {username,email,password,contact} = request.body;
    let user = await User.create({username,email,password,contact})
    return response.status(200).json({message: 'Sign up success', user: user});
   }
   catch(err){
      return response.status(500).json({message: "Internal Server Error.."});
   }
}