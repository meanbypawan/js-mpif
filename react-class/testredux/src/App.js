import { useDispatch, useSelector } from "react-redux";
import A from "./components/A";
import { decrement } from "./redux-config/CounterSlice";

function App(){
  const{counter} = useSelector((store)=>store.Data);
  const dispatch = useDispatch();
  return <>
    <h1>App component...{counter}</h1>
    <button onClick={()=>dispatch(decrement())}>Decrement Counter : {counter}</button>
    <hr/>
    <A/>
  </>
}

export default App;