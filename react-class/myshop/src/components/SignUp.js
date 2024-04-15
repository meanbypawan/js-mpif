import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./WebApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function SignUp(){
    const navigate = useNavigate();
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const handleSignUp = async ()=>{
      try{  
        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        let response = await axios.post(Api.signUpApi,{name,email,password});
        toast.success("Sign up success ! plz sign in");
      }
      catch(err){
        toast.error("Oops! something went wrong..");
      }
    }
    return <>
      <ToastContainer/>
      <div className="sign-in-component">
        <div className="bg-danger text-white d-flex justify-content-center align-items-center" style={{height:"60px"}}>
            <h4>Sign Up</h4>
        </div>

        <div className="form-group p-2 mt-3">
            <input ref={nameInput} type="text" placeholder="Enter name" className="form-control"/>
        </div>
        <div className="form-group p-2">
            <input ref={emailInput} type="text" placeholder="Enter email" className="form-control"/>
        </div>
        <div className="form-group p-2">
            <input ref={passwordInput} type="password" placeholder="Enter password" className="form-control"/>
        </div>
        <div className="form-group p-2">
            <button onClick={handleSignUp} className="btn btn-danger">Sign up</button>
            <span onClick={()=>navigate("/")} className="text-primary ml-3" style={{cursor:"pointer"}}>Already have account ?</span>
        </div>
      </div>
    </>
}

export default SignUp;