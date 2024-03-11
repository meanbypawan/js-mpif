import { validationResult } from "express-validator";
import User from "../model/user.model.js";

export const signIn = (request,response,next)=>{
    let {email,password} = request.body;
    User.signIn(email,password)
    .then(result=>{
      if(result.length)
       return response.status(200).json({message: "Sign in Success..."});
      else
       return response.status(401).json({error: "Bad request...."}); 
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const signUp = (request,response,next)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: "Bad request", errorMessage: errors.array()});

    let {username,email,password,contact} = request.body;
    let user = new User(null,username,email,password,contact);
    user.signUp().then(result=>{
      return response.status(200).json({message: "Sign up success...."});
    }).catch(err=>{
     console.log(err); 
     return response.status(500).json({error: "Insernal Server Error.."});
    });
 }