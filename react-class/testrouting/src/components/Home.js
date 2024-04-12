import { useEffect, useState } from "react";
import Header from "./Header";

function Home(){
    
    const [counter,setCounter] = useState(100);

    useEffect(()=>{
        console.log("First Flevour...");
    });
    
    useEffect(()=>{
        console.log("Second Flevour with empty dependency array...");
    },[]);

    useEffect(()=>{
        console.log("Third Flevour with counter dependency...");
    },[counter]);

    useEffect(()=>{
        console.log("Fourth Flevour...");
        return ()=>{
            console.log("Fourth Flevour with return callback(WillUnMount..)");
        }
    },[]);
    return <>
      <Header/>
      <h3 className="mt-5">Home Component...</h3>
      <button onClick={()=>setCounter(counter+1)}>Counter : ({counter})</button>
    </>
}

export default Home;