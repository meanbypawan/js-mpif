import logo from './logo.svg';
import './App.css';
import React, { Component, Suspense, useCallback, useMemo, useState } from 'react';
import FirstMemoized from './components/First';
import Second from './components/Second';
import { Link, Route, Routes } from 'react-router-dom';
//import Fourth from './components/Fourth';
import Third from './components/Third';
const Fourth = React.lazy(()=>import('./components/Fourth'));
function App(){
    const [counter,setCounter] = useState(100);
    const [evenCounter,setEvenCounter] = useState(0);
    const changeCounter = useCallback(()=>{
      setCounter(counter + 1);
    },[counter]);
    
    console.log("App Re-render");
    let customer = {
      id:100,
      name: "XYZ"
    };
    customer = useMemo(()=>customer,[]);
    return <>
      <h1>App component...</h1>
      <button onClick={changeCounter}>{counter}</button>
      <button onClick={()=>setEvenCounter(evenCounter+1)}>Even Counter : {evenCounter}</button>
      <hr/>
      <hr/>
      <hr/>
      <Link to="/first">First</Link>&nbsp;
      <Link to="/second">Second</Link>&nbsp;
      <Link to="/third">Third</Link>&nbsp;
      <Link to="/fourth">Fourth</Link>&nbsp;
      <Routes>
        <Route path='first' element={<FirstMemoized/>}/>
        <Route path='second' element={<Second/>}/>
        <Route path='third' element={<Third/>}/>
        <Route path='fourth' element={<Suspense fallback={<h1>Please wait</h1>}><Fourth/></Suspense>}/>
      </Routes>
    </>
}

export default App;
