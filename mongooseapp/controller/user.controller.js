import { validationResult } from "express-validator";
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const getProfile = (request,response,next)=>{
    let userId = request.params.userId;
    User.findOne({_id: userId})
    .then(result=>{
        result.profile = "http://localhost:3000/images/"+result.profile;
        return response.status(200).json({user: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const updateProfile = (request,response,next)=>{
    let userId = request.body.userId;
    let fileName = "";
    if(request.file)
      fileName = request.file.filename;
    
    User.updateOne({_id: userId},{
        $set:{profile: fileName}
    }).then(result=>{
        if(result.modifiedCount)
          return response.status(200).json({message: "Profile updated..."});
        return response.status(401).json({error: "Bad request (Id not found)"});  
    }).catch(err=>{
        return response.status(500).json({message: "Internal Server Error"});
    });  
}
export const signIn = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let user = await User.findOne({ email });
        return user ?
            bcrypt.compareSync(password, user.password) ? response.status(200).json({ message: "Sign in successs", user: { ...user.toObject(), password: undefined }, token: generateToken(email) }) : response.status(401).json({ error: "Bad request", message: "Invalid password" })
            : response.status(401).json({ error: "Bad request", message: "Invalid email id" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
export const signUp = async (request, response, next) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty())
            return response.status(401).json({ error: "Bad request", errorMessage: errors.array() });
        let password = request.body.password;
        let saltKey = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, saltKey);
        request.body.password = password;
        let result = await User.create(request.body);
        result = result.toObject();
        delete result.password;
        return response.status(200).json({ message: "Sign up success", user: result });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

const generateToken = (email) => {
    let payload = { subject: email };
    return jwt.sign(payload, "reruerffdhffjvxcxmvbvbeoirukfjhkf");
}