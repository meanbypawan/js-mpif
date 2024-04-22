import { useDispatch } from "react-redux";
import { signOut } from "../redux-config/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import Api from "./WebApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ProductContext } from "../App";
function Header({keyword}) {
    const {productList,setProductList} = useContext(ProductContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchInput = useRef();
    const handleSignOut = ()=>{
      dispatch(signOut());
      navigate("/");
    }
    const handleSearch = async (event)=>{
     try{
      event.preventDefault();     
      let keyword = searchInput.current.value;
      let response = await axios.get(Api.searchProduct+`/${keyword}`);
      setProductList(response.data.products);
      navigate("/home");
     }
     catch(err){
        toast.error("Oops! something went wrong..");
     } 
    }
    return <>
        <ToastContainer/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My-Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Products</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">Cart <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleSignOut} className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
                <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
                    <input value={keyword} onChange={handleSearch} ref={searchInput} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
}

export default Header;