function TaskCard({task,index,changeTaskStatus,defaultTaskStatus,priorityList}){
  return <div className="col-md-3 p-2">
  <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"200px",boxShadow:"0px 0px 10px grey"}}>
     <small style={{width:"70px", borderRadius:"50px"}} className={`mb-2 text-white text-center ${task.pid==1 ? "bg-danger" : task.pid==2 ? "bg-warning" : "bg-info"}`}>{priorityList.find((priorityObj)=>priorityObj.priorityId==task.pid).priorityValue}</small>
     <h4>{task.title}</h4>
     <p>{task.date}</p>
     {defaultTaskStatus=="active" ? <button onClick={()=>changeTaskStatus(task.taskId,"deactive")} className="btn btn-success">Deactive</button> : <button onClick={()=>changeTaskStatus(task.taskId,"active")} className="btn btn-danger">Active</button>}
     
  </div>
</div>
}

export default TaskCard;