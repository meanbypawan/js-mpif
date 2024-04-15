import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Auth from "./components/Auth";
import ProductDetail from "./components/ProductDetails";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="home" element={<Auth><Home/></Auth>}/>
      <Route path="product-detail/:productId" element={<Auth><ProductDetail/></Auth>}/>
    </Routes>
  </>
}

export default App;
