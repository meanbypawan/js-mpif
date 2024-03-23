import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: String
});

export const Category = mongoose.model("category",categorySchema);