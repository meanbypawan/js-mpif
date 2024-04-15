import { Navigate } from "react-router-dom";

function Auth({children}){
  if(sessionStorage.getItem("current-user"))
    return children;
  else
    return <Navigate to="/"/>  
}

export default Auth;