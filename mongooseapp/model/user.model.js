import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true
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
    }
},{versionKey: false});


export const User = mongoose.model("user",userSchema);
/*
  User.create({})
  User.find()
  User.findOne()
  User.updateOne()
  .......
*/