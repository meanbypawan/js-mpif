import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../components/WebApi";
export const fetchCartItems = createAsyncThunk("CartSlice/fetchCartItems",async(userId)=>{
  try{
     let response = await axios.get(Api.cartItems+`/${userId}`);
     return response.data.data;
  }
  catch(err){
    console.log(err);
  }
});
const slice = createSlice({
    name: "CartSlice",
    initialState:{
        cartItems: [],
        isLoading: false,
        error: null,
        totalAmount: 0
    },
    reducers:{
        updateQty:(state,action)=>{
          let items = state.cartItems[action.payload.index];
          items.qty = action.payload.qty;
          state.cartItems.splice(action.payload.index,1);
          state.cartItems.splice(action.payload.index,0,items);
          state.totalAmount = 0;
          for(let items of state.cartItems){
            state.totalAmount = state.totalAmount + items["products.price"] * items.qty;
         }
        },
        removeFromCart: (state,action)=>{
          state.cartItems.splice(action.payload.index,1);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCartItems.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchCartItems.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload;
            let newItemList = [];
            for(let items of state.cartItems){
                items.qty = 1;
                newItemList.push(items);
                state.totalAmount = state.totalAmount + items["products.price"];
            }
            state.cartItems = newItemList;
        }).addCase(fetchCartItems.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong..";
        })
    }
});

export const {updateQty, removeFromCart} = slice.actions;
export default slice.reducer;