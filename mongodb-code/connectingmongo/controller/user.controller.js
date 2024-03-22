import db from "../db/dbConfig.js";
export const getUser = (request,response,next)=>{
    db.collection("users").find().toArray()
    .then(result=>{
        return response.status(200).json({users: result});
    }).catch(err=>{
        return response.status(500).json({error: "Server Error"});
    })
}
export const save = (request,response,next)=>{
    db.collection("users").insertOne(request.body)
    .then(result=>{
        return response.status(200).json({message:"User created..."});
    }).catch(err=>{
        return response.status(500).json({error: "Server Error..."});
    })
}

