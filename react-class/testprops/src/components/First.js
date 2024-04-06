import { Component } from "react";

class First extends Component{
    
    render(){
        let {message,a,b,c,incrementCounter,counter} = this.props;
        console.log(this.props);
        return <>
          <h3>First Component..</h3>
          {message} {a} {b} {c+""}
          <button onClick={()=>incrementCounter()}>Counter From First : {counter}</button>
        </>
    }
}

export default First;