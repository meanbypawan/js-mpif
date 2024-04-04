import { Component } from "react";

class App extends Component{
  constructor(state){
    super(state);
    this.hello = this.hello.bind(this);
    this.state = {
      counter: 100,
      oddCounter : 1,
      evenCounter: 0
    }
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  hello(){
    window.alert(this.state.counter);
  }
   render(){
    console.log("render.called..");
    return <>
       <h4>App component</h4>
       <hr/>
       <button onClick={()=>this.hello()}>Counter : {this.state.counter}</button>
       <button onClick={()=>{this.setState({oddCounter: this.state.oddCounter+2})}}>Odd Counter : {this.state.oddCounter}</button>
       <button onClick={()=>{this.setState({evenCounter: this.state.evenCounter+2})}}>Even Counter : {this.state.evenCounter}</button>
    </>
   }
}
export default App;
