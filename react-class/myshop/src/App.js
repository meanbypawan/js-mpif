import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Auth from "./components/Auth";
import ProductDetail from "./components/ProductDetails";
import Cart from "./components/Cart";
import OrderDetail from "./components/OrderDetail";
import { createContext, useState } from "react";
import Header from "./components/Header";
import { useSelector } from "react-redux";
export const ProductContext = createContext();
function App(){
  const [productList,setProductList] = useState([]);
  const {currentUser,isLoggedIn} = useSelector((store)=>store.user);
  return <>
   <ProductContext.Provider value={{productList,setProductList}}>
    {isLoggedIn ? <Header/> : ""}
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="home" element={<Auth><Home/></Auth>}/>
      <Route path="product-detail/:productId" element={<Auth><ProductDetail/></Auth>}/>
      <Route path="cart" element={<Auth><Cart/></Auth>}>
        <Route path="order-details" element={<OrderDetail/>}/>
      </Route>

    </Routes>
    </ProductContext.Provider>  
  </>
}

export default App;
