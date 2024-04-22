import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { fetchCartItems, removeFromCart, updateQty } from "../redux-config/CartSlice";
import OrderDetail from "./OrderDetail";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Api from "./WebApi";
import { ToastContainer, toast } from "react-toastify";
function Cart(){
    const {currentUser,isLoggedIn} = useSelector((store)=>store.user);
    const {cartItems,totalAmount} = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchCartItems(currentUser.id));
    },[]);
    const handleQty = (index,qty)=>{
       dispatch(updateQty({index,qty}));
    }
    const handleRemoveFromCart = async (productId,index)=>{
        let userId = currentUser.id;
        try{
          let response = await axios.delete(Api.removeFromCart+`/${userId}/${productId}`);
          dispatch(removeFromCart(index));
          toast.success("Item removed from cart");
        }
        catch(err){
            toast.error("Oops ! something wrong..");
        }
    }
    return <>
      <ToastContainer/>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-7">
              <table className="table">
                <thead>
                    <tr>
                        <td>S.no</td>
                        <td>Title</td>
                        <td>Brand</td>
                        <td>Price</td>
                        <td>Qty</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item,index)=><tr key={index}>
                       <td>{index+1}</td>
                       <td>{item["products.title"]}</td>
                       <td>{item["products.brand"]}</td>
                       <td>{item["products.price"]}</td>
                       <td><input onChange={(event)=>handleQty(index,event.target.value)} type="number" defaultValue={item.qty} style={{width:"50px"}}/></td>
                       <td><span onClick={()=>handleRemoveFromCart(item.id,index)} className="text-danger" style={{curoser:"pointer"}}>Remove</span></td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            <div className="col-md-3 offset-1">
                <div style={{height:"200px", boxShadow:"0 0 5px grey"}}>
                    <div className="bg-danger p-2 d-flex justify-content-center">
                        <span className="text-white">Order Details</span>
                    </div>
                    <p className="p-2">Total Item: {cartItems.length}</p>
                    <p className="pl-2">Total Bill  Amount : <span className="text-success">{totalAmount} Rs.</span></p>
                    <button onClick={()=>navigate("order-details")} style={{width:"90%", margin:"auto"}} className="ml-2 btn btn-secondary">Checkout</button>
                </div>
                <div className="mt-5 order-details">
                    <Outlet/>
                </div>
            </div>
        </div>
      </div>
    </>
}

export default Cart;