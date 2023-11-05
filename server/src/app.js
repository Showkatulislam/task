const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createHttpError = require('http-errors');
const { errorResponse } = require('./Reponse/SuccessRespones');
const UserRouter = require('./routes/UserRoutes');
const taskRouter = require('./routes/TaskRoutes');
const verify = require('./helper/verify');


const app=express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/v1/user',UserRouter)
app.use('/v1/task',verify,taskRouter)


//client error
app.use((req, res, next) => {
    /*  res.status(404).send('Route is Not Found') */
    next(createHttpError(401, "Route not Found"));
  });
  
  
  //server error
  app.use((err, req, res, next) => {
    return errorResponse(res,{statusCode:err.status,message:err.message})
  });
  

module.exports=app

