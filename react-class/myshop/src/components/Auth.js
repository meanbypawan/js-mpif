import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({children}){
  const {isLoggedIn} = useSelector((store)=>store.user);
    return isLoggedIn ? children : <Navigate to="/"/>;
}

export default Auth;