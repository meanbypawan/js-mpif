import { Component } from "react";

class StudentList extends Component{
    render(){
        let {studentList, defaultBranch, removeRecord} = this.props;
        return <table className="table">
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
          {studentList.filter((student)=>student.branch==defaultBranch || defaultBranch=="ALL").map((student,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.branch}</td>
            <td>{student.contact}</td>
            <td><button onClick={()=>removeRecord(index)} className="btn btn-outline-danger">Remove</button></td>
          </tr>)}
        </tbody>
      </table>
    }
}

export default StudentList;