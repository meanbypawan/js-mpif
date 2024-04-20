import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Api from "./WebApi";
import axios from "axios";
import { fetchCartItems } from "../redux-config/CartSlice";
function Product({ product }) {
    const navigate = useNavigate();
    const {currentUser,isLoggedIn} = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    const handleAddToCart  = async (productId)=>{
       try{ 
        if(isLoggedIn){
           let userId = currentUser.id;
           let response = await axios.post(Api.addToCart,{userId,productId});
           console.log(response.data);
           toast.success(response.data.message);
           dispatch(fetchCartItems(currentUser.id));
        }
        else
          toast.info("Sign in first");
       }
       catch(err){
         toast.error("Oops ! something went wrong..");
       }   
    }
    return <>
        <ToastContainer/>
        <div className="col-md-4 p-3">
            <div className="d-flex flex-column align-items-center p-2" style={{ boxShadow: "0 0 5px grey", height: "400px" }}>
                <img src={product.thumbnail} width="200px" height="200px" style={{ borderRadius: "50%" }} />
                <h3 className="mt-3">{product.title}</h3>
                <p className="">Price : <label className="text-success" style={{ fontSize: "20px" }}>{product.price} Rs.</label></p>
                <span onClick={()=>navigate(`/product-detail/${product.id}`)} className="text-primary" style={{cursor: "pointer"}}>View more</span>
                <button onClick={()=>handleAddToCart(product.id)} style={{ width: "90%", margin: "auto" }} className="btn btn-secondary">Add To Cart</button>
            </div>
        </div>
    </>
}

export default Product;