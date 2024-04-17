import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
export const store = configureStore({
    reducer:{
        Data: CounterSlice
    }
});

