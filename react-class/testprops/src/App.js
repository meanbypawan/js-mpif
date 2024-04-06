import { Component } from "react";
import First from "./components/First";

class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
  }
  incrementCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    return <>
      <h1>App component..</h1>
      <button onClick={this.incrementCounter}>Counter From App : {this.state.counter}</button>
      <First message="Hello World" a={20} b = {10} c = {true} incrementCounter={this.incrementCounter} counter={this.state.counter}/>
    </>
  }
}

export default App;