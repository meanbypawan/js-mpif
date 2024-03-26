import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  decription:String,
  price:Number,
  rating:Number,
  stock: Number,
  discountPercentage: Number,
  brand: String,
  category:String,
  thumbnail:String,
  images: []
});

export const Product = mongoose.model("product",productSchema);