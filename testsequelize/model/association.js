import Category from "./category.model.js";
import Product from "./product.model.js";

Category.hasMany(Product,{
    foreignKey: 'categoryname'
});
Product.belongsTo(Category,{
    foreignKey: 'categoryname', targetKey: 'categoryName'
});

export  {Category,Product};