const express = require('express');
const { getTask, createTask, getTaskById, deleteTaskById, changeStatus, deleteAllTask } = require('../controllers/TaskController');

const taskRouter=express.Router()

taskRouter.post('/',createTask)
taskRouter.get('/',getTask)
taskRouter.delete('/all',deleteAllTask)
taskRouter.get('/:id',getTaskById)
taskRouter.delete('/:id',deleteTaskById)
taskRouter.patch('/:id',changeStatus)



module.exports=taskRouter