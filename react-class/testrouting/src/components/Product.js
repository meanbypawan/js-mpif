import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Product(){
    const navigate = useNavigate();
    return <>
      <Header/>
      <div className="container mt-5">
        <button onClick={()=>navigate("/")} className="btn btn-warning">Home</button>
        <h1>Product Component...</h1>
        <Link to=""><button className="btn btn-info">Recent Product</button></Link>
        <Link to="feature-product"><button className="btn btn-secondary ml-2">Feature Product</button></Link>
      </div>
      <hr/>
      <Outlet/>
    </>
}

export default Product;