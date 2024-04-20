import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { fetchCartItems, updateQty } from "../redux-config/CartSlice";

function Cart(){
    const {currentUser,isLoggedIn} = useSelector((store)=>store.user);
    const {cartItems,totalAmount} = useSelector((store)=>store.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCartItems(currentUser.id));
    },[]);
    const handleQty = (index,qty)=>{
       dispatch(updateQty({index,qty}));
    }
    return <>
      <Header/>
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
                       <td><span className="text-danger">Remove</span></td>
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
                    <button style={{width:"90%", margin:"auto"}} className="ml-2 btn btn-secondary">Checkout</button>
                </div>
            </div>
        </div>
      </div>
    </>
}

export default Cart;