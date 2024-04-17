import { createContext, useState } from "react";
import A from "./components/A";

export const MessageContext = createContext();
export const CounterContext = createContext();
function App(){
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...{counter}</h1>
    <hr/>
   <CounterContext.Provider value={{counter,setCounter}}> 
    <MessageContext.Provider value={{message: "Hello"}}>   
      <A/>
    </MessageContext.Provider>
   </CounterContext.Provider>
  </>
}

export default App;