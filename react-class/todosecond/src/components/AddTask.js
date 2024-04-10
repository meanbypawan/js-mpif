import { useRef } from "react";

function AddTask({addTask,priorityList}){
    
    let titleInput = useRef(null);
    let priorityInput = useRef(null);

    return <>
      <div className="container mt-2">
     <div className="row">
      <div className="col-md-6">
        <label>Task title</label>
        <input ref={titleInput} type="text" className="form-control"/>
      </div>
      <div className="col-md-6">
        <label>Set priority</label>
        <select ref={priorityInput} className="form-control">
          {priorityList.map((priorityObj,index)=><option key={index} value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
        </select>
      </div>
     </div>
     <div className="row mt-2 pl-3">
        <button onClick={()=>addTask(titleInput.current.value,priorityInput.current.value)} className="btn btn-secondary">ADD</button>
     </div>
     <hr/>
    </div>
    
    </>
}

export default AddTask;