import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, incrementEvenCounter, incrementOddCounter } from "../redux-config/MultiCounter";

function Counters(){
    const {counter,evenCounter,oddCounter} = useSelector((store)=>store.MultiCounter);
    const dispatch = useDispatch();
    return <>
       <h>Multi Counter Component...</h>
       <button onClick={()=>dispatch(incrementCounter(5))}>Counter : {counter}</button>
       <button onClick={()=>dispatch(incrementEvenCounter())}>Even Counter : {evenCounter}</button>
       <button onClick={()=>dispatch(incrementOddCounter())}>Odd Counter : {oddCounter}</button>
    </>
}

export default Counters;