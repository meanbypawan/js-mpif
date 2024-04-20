import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "UserSlice",
    initialState:{
        currentUser: {},
        isLoggedIn: false
    },
    reducers:{
        setCurrentUser: (state,action)=>{
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        signOut: (state,action)=>{
            state.currentUser = {};
            state.isLoggedIn = false;
        }
    }
});

export const {setCurrentUser, signOut} = slice.actions;
export default slice.reducer;