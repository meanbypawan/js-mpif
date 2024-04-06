import { Component } from 'react';
import StudentsData from './components/Data';
import Header from './components/Header';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

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
  addRecord = (roll,name,contact,branch)=>{
    let newStudentRecord = {roll, name,contact,branch}
    this.setState({studentList: [...this.state.studentList,newStudentRecord]});
  }
  updateBranch = (branch)=>{
    this.setState({defaultBranch: branch});
  }
  render(){
   return <>
      <Header/>
      <div className="container mt-5">
         <AddStudent branchList={this.state.branchList} studentList={this.state.studentList} updateBranch={this.updateBranch}  addRecord={this.addRecord}/>
      </div>
      <div className="student-list mt-5">
        <StudentList removeRecord={this.removeRecord} studentList={this.state.studentList} defaultBranch={this.state.defaultBranch}/>
      </div>
   </> 
  }
}

export default App;