import React from "react";

function Second({name,counter,changeCounter}){
    console.log("Second Re-render..");
    return <>
      <h2>Second Component...{name}</h2>
      <button onClick={()=>changeCounter()}>{counter}</button>
      <hr/>
    </>
}

export default React.memo(Second);