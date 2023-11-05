const createHttpError = require('http-errors');
const jwt=require('jsonwebtoken')
const verify=(req,res,next)=>{
    const token=req.headers.token
    console.log("token",token);
    var decoded = jwt.verify(token, 'saikat');
    if(!decoded.email){
        return createHttpError(404,"UnAuthorized User")
    }
    next()
}

module.exports=verify