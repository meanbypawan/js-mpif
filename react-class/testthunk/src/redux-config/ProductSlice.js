import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../Api";
export const getProduct = createAsyncThunk("ProductSlice/getProduct",async ()=>{
  try{
     let response = await axios.get(Api.products);
     console.log(response.data);
     return response.data.products;
  }
  catch(err){

  }
});
const slice = createSlice({
    name: "ProductSlice",
    initialState:{
        productList: [],
        isLoading: false,
        error: false
    },
    reducers:{
      removeProduct: (state,action)=>{
        if(window.confirm("Are you sure ?")){ 
         let index = action.payload;
         state.productList.splice(index,1);
        } 
      }
    },
    extraReducers: (builder)=>{
        builder.addCase(getProduct.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.productList = action.payload;
        }).addCase(getProduct.rejected,(state,action)=>{
            state.error = "Oops! something went wrong..";
        })
    }
});

export const {removeProduct} = slice.actions;
export default slice.reducer;