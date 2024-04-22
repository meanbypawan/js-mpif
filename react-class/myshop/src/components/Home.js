import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Api from "./WebApi";
import { ToastContainer, toast } from "react-toastify";
import Product from "./Product";
import { ProductContext } from "../App";
function Home(){
  const {productList,setProductList} = useContext(ProductContext);
  
  useEffect(()=>{
    loadProducts();
  },[]);

  const loadProducts  = async ()=>{
     try{
       let response = await axios.get(Api.productListApi);
       setProductList(response.data.productList);
     }
     catch(err){
       console.log(err);
       toast.error("Something wrong");
     }
  }
  return <>
    <ToastContainer/>
    <div className="container mt-5">
        <div className="row">
          {productList.map((product,index)=><Product product={product} key={index}/>)}
        </div>
    </div>
  </>
}

export default Home;