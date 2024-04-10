import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App(){
  const [counter,setCounter] = useState(100);
  const [evenCounter,setEvenCounter] = useState(0);
  const [oddCounter,setOddCounter] = useState(1);
  const incrementCounter = ()=>{
    setCounter(counter+1);
  }
  return <>
    <h1>App component...</h1>
    <button onClick={incrementCounter}>Counter : ({counter})</button>
    <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter:({evenCounter})</button>
    <button onClick={()=>setOddCounter(oddCounter+2)}>Odd Counter : ({oddCounter})</button>
  </>
}
export default App;
