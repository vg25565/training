import { useState } from "react";
import "./AddTask.css";
export const AddTask = ({tasks,setTasks}) => {
    const[taskvalue,setTask]=useState("");
    const[progress,setProgress]=useState(false);
    const handleReset =()=>{
        setTask("");
        setProgress(false);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const task={
            id:Math.floor(Math.random()*10000),
            name:taskvalue,
            completed:Boolean(progress)
        }
       setTasks([...tasks,task]);
        handleReset();
    }
  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Task Name:</label>
        <input onChange={(e)=>setTask(e.target.value)} type="text" name="task" id="task" placeholder="Enter Task" autoComplete="off" value={taskvalue}/>
        <select onChange={(e)=>setProgress(e.target.value)}value={progress}>
            <option value={true}>Completed</option>
            <option value={false}>pending</option>
        </select>
        <button  type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">Reset</span>
        </form>
       
    </section>
  )
}
