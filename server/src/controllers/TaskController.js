const { default: mongoose } = require("mongoose")
const { successRespone } = require("../Reponse/SuccessRespones")
const Task = require("../models/Task")



const createTask=async(req,res,next)=>{
    try {
        console.log("body",req.body)
        const {title,content,email}=req.body
        const addTask={
            title,
            content,
            email:email
        }
        
        const newTask=await Task.create(addTask)

        return successRespone(res,{
            statusCode:200,
            message:"Task add successfully",
            payload:{
                newTask
            }
        })
    } catch (error) {
        next(error)
    }
}

const getTask=async(req,res,next)=>{
    try {
        
        const task=await Task.find({})
        return successRespone(res,{
            statusCode:200,
            payload:{
                task
            }
        })

    } catch (error) {
        next(error)
    }
}

const getTaskById=async(req,res,next)=>{
    try {
        const {id}=req.params;
        console.log(id);
        const task=await Task.findById(id)

        return successRespone(res,{
            statusCode:200,
            payload:{
                task
            }
        })
        
    } catch (error) {
        next(error)
    }
}
const deleteTaskById=async(req,res,next)=>{
    try {
        const {id}=req.params;
        console.log(id);
        const task=await Task.findByIdAndDelete(id)

        return successRespone(res,{
            statusCode:200,
            payload:{
                task
            }
        })
        
    } catch (error) {
        next(error)
    }
}
const changeStatus=async(req,res,next)=>{
    try {
        const {id}=req.params;
        console.log(id);
        const task=await Task.findByIdAndUpdate(id,{status:"completed"})

        return successRespone(res,{
            statusCode:200,
            payload:{
                task
            }
        })
        
    } catch (error) {
        next(error)
    }
}

const deleteAllTask=async(req,res,next)=>{
    try {
        const task=await Task.deleteMany({})
        return successRespone(res,{
            statusCode:200,
            payload:{
                task
            }
        })
        
    } catch (error) {
        next(error)
    }
}
module.exports={getTask,createTask,getTaskById,deleteTaskById,changeStatus,deleteAllTask}