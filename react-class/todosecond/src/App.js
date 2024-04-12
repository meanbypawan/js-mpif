import { useRef, useState } from "react";
import Data from "./Data";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";
function App(){
  const [taskList,setTaskList] = useState(Data);
  const [defaultTaskStatus,setDefaultTaskStatus] = useState("active");
  
  const [priorityList,setPriorityList] = useState([{priorityId:1, priorityValue:"High"},
  {priorityId:2, priorityValue:"Medium"},
  {priorityId:3, priorityValue:"Low"}])

  const changeTaskStatus = (taskId,status)=>{
    let index = taskList.findIndex((task)=>task.taskId == taskId);
    let task = taskList[index];
    taskList.splice(index,1);
    task.status = status;
    taskList.splice(index,0,task);
    setTaskList([...taskList]);
  }
  const addTask = (title,pid)=>{
    let date = new Date();
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let status = "active";
    let taskId = taskList.length+101;
    setTaskList([...taskList,{title,pid,date,status,taskId}]); 
  }
  return <> 
    <Header/>
    <AddTask addTask={addTask} priorityList={priorityList}/>
    <div className="container mt-2 p-2">
      <button disabled={defaultTaskStatus=="active" ? true: false} onClick={()=>setDefaultTaskStatus("active")} className="btn btn-warning">Active ({taskList.filter((task)=>task.status=="active").length})</button>
      <button disabled={defaultTaskStatus=="deactive" ? true: false} onClick={()=>setDefaultTaskStatus("deactive")} className="btn btn-primary ml-2">Deactive ({taskList.filter((task)=>task.status=="deactive").length})</button>
    </div>
    <div className="container mt-5">
      <div className="row">
      {taskList.filter((task)=>task.status==defaultTaskStatus).sort((task1,task2)=>task1.pid-task2.pid).map((task,index)=><TaskCard key={index} task={task} index={index} defaultTaskStatus={defaultTaskStatus} changeTaskStatus={changeTaskStatus} priorityList={priorityList}/>)}
      </div>
    </div>
  </>
}

export default App;