import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Api from "./WebApi";
function SignIn(){
    const navigate = useNavigate();
    const emailInput = useRef();
    const passwordInput = useRef();
    
    const handleSignIn = async ()=>{
        try{
          let email = emailInput.current.value;
          let password = passwordInput.current.value;
          let response = await axios.post(Api.signInApi,{email,password});
          let user = response.data.user;
          delete user.password;
          saveUser(user);
          navigate("/home");
        }
        catch(err){
            toast.error("Error in Sign in");
        }
    }
    const saveUser = (user)=>{
        sessionStorage.setItem("current-user",JSON.stringify(user));
    }
    return <>
     <ToastContainer/>
      <div className="sign-in-component">
        <div className="bg-danger text-white d-flex justify-content-center align-items-center" style={{height:"60px"}}>
            <h4>Sign In</h4>
        </div>
        <div className="form-group p-2 mt-3">
            <input ref={emailInput} type="text" placeholder="Enter email" className="form-control"/>
        </div>
        <div className="form-group p-2">
            <input ref={passwordInput} type="password" placeholder="Enter password" className="form-control"/>
        </div>
        <div className="form-group p-2">
            <button onClick={handleSignIn} className="btn btn-danger">Sign in</button>
            <span onClick={()=>navigate("/signup")} style={{cursor:"pointer"}} className="text-primary ml-3">New user ?</span>
        </div>
      </div>
    </>
}

export default SignIn;