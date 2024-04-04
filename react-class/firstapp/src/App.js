import { Component } from "react";

class App extends Component{
  render(){
    let data = 200;
    let status = true;
    let fruitList = ["Mango","Banana","Apple","Graphes","Watermelon","Pomegarent"];
    let friendList = [<h3>Rahul</h3>,<h3>Leesha</h3>,<h3>Cheeku</h3>,<h3>Peeku</h3>]
    let customerList = [
      {id: 1, name: "A", age: 32},
      {id: 2, name: "B", age: 33},
      {id: 3, name: "C", age: 34},
      {id: 4, name: "D", age: 35},
      {id: 5, name: "E", age: 36}
    ]
    return <>
       <h1>App Component..</h1>
       <p>{data}</p>
       {status ? <small style={{color: "green", fontFamily:"fantasy"}}>HI</small>  : 
         <small style={{color:"red",fontFamily:"cursive"}}>Bye</small>}
        <ul>
        {fruitList.map((item,index)=><li key={index}>{item}</li>)}
        <hr/>
        {fruitList.map((item,index)=><button style={{color: index%2 ? "green" : "red"}} key={index}>{item}</button>)} 
       </ul>
       {friendList}
       <hr/>
       <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.age}</td>
          </tr>)}
        </tbody>
       </table>
    </>
  }
}
export default App;
