import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        set: function(v){
            return "Hi "+v;
        },
        get: updateName
    },
    email:{
        type: String,
        trim: true,
        unique: true
    },
    password:{
        type: String
    },
    contact:{
        type: Number,
        trim: true
    },
    profile:{
        type: String,
        trim: true
    }
}, { toJSON: { getters: true } },{versionKey: false});

function updateName(username){
    return "Hello "+username;
}
export const User = mongoose.model("user",userSchema);
/*
  User.create({})
  User.find()
  User.findOne()
  User.updateOne()
  .......
*/