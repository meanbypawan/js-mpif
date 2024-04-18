import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import MultiCounterSlice from "./MultiCounter";
export const store = configureStore({
    reducer:{
        Data: CounterSlice,
        MultiCounter: MultiCounterSlice
    }
});

