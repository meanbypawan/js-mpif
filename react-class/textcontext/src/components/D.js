import { useContext } from "react";
import { CounterContext, MessageContext } from "../App";

function D(){
    const {message} = useContext(MessageContext);
    const {counter, setCounter} = useContext(CounterContext);
    return <>
      <h3>D Component...{message}</h3>
      <button onClick={()=>setCounter(counter+1)}>Change Counter : {counter}</button>
      <hr/>
    </>
}

export default D;