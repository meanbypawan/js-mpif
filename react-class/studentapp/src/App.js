import { Component } from 'react';
import StudentsData from './components/Data';

class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: StudentsData,
      branchList: ["CS","IT","EC","MECH"],
      defaultBranch: "ALL"
    }
  }
  removeRecord = (index)=>{
    if(window.confirm("Are you sure ?")){
      this.state.studentList.splice(index,1);
      this.setState({studentList: [...this.state.studentList]});
    }
  }
  addRecord = ()=>{
    let newStudentRecord = {roll: this.roll.value, name: this.name.value,contact: this.contact.value,branch:this.branch.value}
    this.setState({studentList: [...this.state.studentList,newStudentRecord]});
  }
  render(){
   return <>
      <div className="header">
        <span>Student App</span>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <input ref={(rollInput)=>this.roll = rollInput} type='text' placeholder='Enter Roll Number' className="form-control"/>
          </div>
          <div className="col-md-6">
            <input ref={(nameInput)=>this.name=nameInput} type='text' placeholder='Enter Student Name' className="form-control"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
             <select ref={(branchInput)=>this.branch = branchInput} className="form-control">
              <option>Select Branch</option>
              {this.state.branchList.map((branch,index)=><option key={index} value={branch}>{branch}</option>)}
             </select>
          </div>
          <div className="col-md-6">
            <input type='text' ref={(contactInput)=>this.contact = contactInput} placeholder='Enter Contact Number' className="form-control"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={this.addRecord} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>this.setState({defaultBranch: "CS"})} className="btn btn-warning">CS({this.state.studentList.filter((student)=>student.branch=="CS").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "IT"})} className="btn btn-info ml-1">IT({this.state.studentList.filter((student)=>student.branch=="IT").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "EC"})} className="btn btn-success ml-1">EC({this.state.studentList.filter((student)=>student.branch=="EC").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "MECH"})} className="btn btn-secondary ml-1">MECH({this.state.studentList.filter((student)=>student.branch=="MECH").length})</button>
            <button onClick={()=>this.setState({defaultBranch: "ALL"})} className="btn btn-danger ml-1">Total({this.state.studentList.length})</button>
          </div>
        </div>
      </div>
      <div className="student-list mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Roll</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Contact</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student)=>student.branch==this.state.defaultBranch || this.state.defaultBranch=="ALL").map((student,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td><button onClick={()=>this.removeRecord(index)} className="btn btn-outline-danger">Remove</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
   </> 
  }
}

export default App;