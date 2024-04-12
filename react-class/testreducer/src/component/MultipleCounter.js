import { useReducer } from "react"

function MultipleCounter(){
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type=="incrementCounter"){
          state.counter = state.counter + 1;
          return {...state};
        }  
        else if(action.type == "incrementEvenCounter"){
            state.evenCounter = state.evenCounter + 2;
            return {...state};
        }
        else if(action.type == "incrementOddCounter"){
            state.oddCounter = state.oddCounter + 2;
            return {...state};
        }
          
    },{
        counter : 100, evenCounter: 0, oddCounter: 1
    });
    return <>
      <button onClick={()=>dispatch({type:"incrementCounter"})}>Counter : {state.counter}</button>
      <button onClick={()=>dispatch({type:"incrementEvenCounter"})}>Even Counter : {state.evenCounter}</button>
      <button onClick={()=>dispatch({type:"incrementOddCounter"})}>Odd Counter : {state.oddCounter}</button>
    </>
}

export default MultipleCounter;