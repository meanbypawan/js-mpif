import User from "../model/user.model.js";

export const signIn = (request,response,next)=>{
    User.findOne({raw: true,where: {email: request.body.email, password: request.body.password}})
    .then(result=>{
        if(result)
         return response.status(200).json({message: 'Sign in success', user: result});
        return response.status(401).json({error: "Bad request.."});
     }).catch(err=>{
        console.log(err);
    })
}
export const signUp = (request,response,next)=>{
    let {username,email,password,contact} = request.body;
    User.create({username,email,password,contact})
    .then(result=>{
        return response.status(200).json({message: 'Sign up success', user: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}