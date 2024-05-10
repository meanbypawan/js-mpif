import React from "react";

function First(){
    console.log("First Re-render...");
    return <>
      <h1>First Component....</h1>
    </>
}
const FirstMemoized = React.memo(First);
export default FirstMemoized;