import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Api from "./WebApi";
import { ToastContainer, toast } from "react-toastify";
import Product from "./Product";
function Home(){
  const [productList,setProductList] = useState([]);
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
    <Header/>
    <div className="container mt-5">
        <div className="row">
          {productList.map((product,index)=><Product product={product} key={index}/>)}
        </div>
    </div>
  </>
}

export default Home;