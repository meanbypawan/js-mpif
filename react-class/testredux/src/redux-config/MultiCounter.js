import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MultiCounter",
    initialState:{
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    },
    reducers:{
        incrementCounter: (state,action)=>{
            state.counter = state.counter + action.payload;
        },
        incrementEvenCounter:(state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        incrementOddCounter: (state,action)=>{
            state.oddCounter = state.oddCounter + 2;
        }
    }
});

export const {incrementCounter, incrementEvenCounter, incrementOddCounter} = slice.actions;
export default slice.reducer;