import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
    reducer:{
        product: ProductSlice
    }
})