import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../public/url";
import TaskCard from "../components/TaskCard";
import {toast} from 'react-hot-toast'
const TaskList = () => {
    const [tasks,setTasks]=useState([])
    const token=localStorage.getItem('token')
    const h={headers:{
        'content-type': 'application/json',
        token
    }}
    useEffect(()=>{
        axios.get(`${url}v1/task`,h)
        .then(res=>{
            setTasks(res.data.payload.task);
        })
    },[])

    const handleDeleteTask=(id)=>{
       axios.delete(`${url}v1/task/${id}`,h)
       .then((res)=>{
       if(res.statusText){
        setTasks(tasks.filter(task=>task._id!==id));
        toast.success("Task Delete Successfully")
       }
       })
    }

    return (
        <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto"
        >
            <h1 className="text-center text-2xl font-bold">All Task</h1>
            {
                tasks?.map(task=><TaskCard action={handleDeleteTask} key={task._id} task={task}></TaskCard>)
            }
        </div>
    );
};

export default TaskList;