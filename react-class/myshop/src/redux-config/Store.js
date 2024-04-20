import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer:{
        user: UserSlice,
        cart: CartSlice
    }
});

export default store;