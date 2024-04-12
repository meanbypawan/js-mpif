import { useReducer } from "react";

function CounterReducer(){
    const [counter,dispatch] = useReducer((state,action)=>{ // action :{type:"",payload:""}
        if(action.type=="increment")
          return state + 1;
        else if(action.type=="decrement")
          return state - 1;
        else if(action.type =="increment-by-input")
          return state + action.payload;
        return 100;    
     },100);
   
    return <>
         <h1>App component..</h1>
     <h3>{counter}</h3>
     <button onClick={()=>dispatch({type:"increment"})}>Increment Counter</button>
     <button onClick={()=>dispatch({type:"decrement"})}>Decrement Counter</button>
     <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
     <button onClick={()=>dispatch({type:"increment-by-input",payload:2})}>Increment By 2</button>
     <button onClick={()=>dispatch({type:"increment-by-input",payload:3})}>Increment By 3</button>
  
    </>
}

export default CounterReducer;