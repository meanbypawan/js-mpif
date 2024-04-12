import { useReducer, useState } from "react";
import CounterReducer from "./component/CounterReducer";
import MultipleCounter from "./component/MultipleCounter";
// increment, decrement, reset
function App(){
  return <>
    <CounterReducer/>
    <hr/>
    <MultipleCounter/>
  </>
}

export default App;