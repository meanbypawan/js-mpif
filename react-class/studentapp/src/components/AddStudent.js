import { Component } from "react";

class AddStudent extends Component{
    render(){
        let {branchList,studentList,addRecord,updateBranch} = this.props;
        return <>
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
              {branchList.map((branch,index)=><option key={index} value={branch}>{branch}</option>)}
             </select>
          </div>
          <div className="col-md-6">
            <input type='text' ref={(contactInput)=>this.contact = contactInput} placeholder='Enter Contact Number' className="form-control"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={()=>addRecord(this.roll.value,this.name.value,this.contact.value,this.branch.value)} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>updateBranch("CS")} className="btn btn-warning">CS({studentList.filter((student)=>student.branch=="CS").length})</button>
            <button onClick={()=>updateBranch("IT")} className="btn btn-info ml-1">IT({studentList.filter((student)=>student.branch=="IT").length})</button>
            <button onClick={()=>updateBranch("EC")} className="btn btn-success ml-1">EC({studentList.filter((student)=>student.branch=="EC").length})</button>
            <button onClick={()=>updateBranch("MECH")} className="btn btn-secondary ml-1">MECH({studentList.filter((student)=>student.branch=="MECH").length})</button>
            <button onClick={()=>updateBranch("ALL")} className="btn btn-danger ml-1">Total({studentList.length})</button>
          </div>
        </div>
        </>
    }
}

export default AddStudent;