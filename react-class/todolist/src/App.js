import { Component } from "react";
import Data from "./Data";
class App extends Component {
  constructor() {
    console.log("construnctor executed....");
    super();
    this.state = {
      taskList: Data,
      priorityList: [
        { priorityId: 1, priorityValue: "High" },
        { priorityId: 2, priorityValue: "Medium" },
        { priorityId: 3, priorityValue: "Low" }
      ],
      defaultTaskStatus: "active",
      taskTitle: "",
      pid: null
    }
  }
  changeTaskStatus = (taskId,status)=>{
    let index = this.state.taskList.findIndex((task)=>task.taskId==taskId);
    let task = this.state.taskList[index];
    this.state.taskList.splice(index,1);
    task.status = status;
    this.state.taskList.splice(index,0,task);
    this.setState({taskList: [...this.state.taskList]});
  }
  addTask = ()=>{
    let title = this.state.taskTitle;
    let pid = this.state.pid;
    let date = new Date();
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let status = "active";
    let taskId = this.state.taskList.length+101;
    let newTask = {title,pid,date,status,taskId};
    this.setState({taskList: [...this.state.taskList,newTask]});
  }
  render() {
    console.log("Render executed....");
    return <>
      <div className="header d-flex justify-content-center align-items-center bg-danger text-white" style={{ height: "50px" }}>
        <small>To Do App</small>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <label>Task title</label>
            <input onChange={(event)=>{this.setState({taskTitle: event.target.value})}} type="text" className="form-control"/>
          </div>
          <div className="col-md-6">
            <label>Task Priority</label>
            <select onChange={(event)=>this.setState({pid: event.target.value})} className="form-control">
              {this.state.priorityList.map((priorityObj,index)=><option value={priorityObj.priorityId} key={index}>
                {priorityObj.priorityValue}
              </option>)}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={this.addTask}className="btn btn-secondary">ADD</button>
          </div>
        </div>
      </div>
      <div className="mt-3 container">
        <button onClick={() => this.setState({ defaultTaskStatus: "active" })} disabled={this.state.defaultTaskStatus == "active" ? true : false} className="btn btn-success">Active({this.state.taskList.filter((task) => task.status == "active").length})</button>
        <button onClick={() => this.setState({ defaultTaskStatus: "deactive" })} disabled={this.state.defaultTaskStatus == "deactive" ? true : false} className="ml-2 btn btn-danger">Deactive({this.state.taskList.filter((task) => task.status == "deactive").length})</button>
      </div>
      <div className="container mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Change status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.taskList.filter((task) => task.status == this.state.defaultTaskStatus).sort((task1,task2)=>{return task1.pid-task2.pid}).map((task, index) => <tr className={task.pid==1 ? "bg-danger" : task.pid==2 ? "bg-info" : "bg-success"} key={index}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.date}</td>
              <td>{this.state.priorityList.find((priorityObj) => { return priorityObj.priorityId == task.pid }).priorityValue}</td>
              <td>{this.state.defaultTaskStatus == "active" ?
                <button onClick={() => this.changeTaskStatus(task.taskId, "deactive")} className="btn btn-outline-warning">Deactive</button> :
                <button onClick={() => this.changeTaskStatus(task.taskId, "active")} className="btn btn-outline-success">Active</button>}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  }
  componentDidMount(){
    console.log("componentDidMount() executed....");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate() executed....");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount() executed.....");
  }
}

export default App;