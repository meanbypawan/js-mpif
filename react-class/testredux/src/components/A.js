import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux-config/CounterSlice";

function A(){
    const {counter} = useSelector((store)=>store.Data);
    const dispatch = useDispatch();
    return <>
      <h4>A Component...:</h4>
      <button onClick={()=>dispatch(increment())}>Increment Counter : {counter}</button>
      <hr/>
    </>
}

export default A;