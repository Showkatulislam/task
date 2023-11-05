const createHttpError = require("http-errors");
const User = require("../models/User");
const { successRespone } = require("../Reponse/SuccessRespones");
const createJwtToken = require("../helper/createJwtToken");
const bcrypt = require('bcryptjs');

const RegisterUser=async(req,res,next)=>{
    try {
        const { name, email, password} = req.body;
        console.log(name,email,password);
        const user = await User.exists({ email });
    
        if (user) {
          throw createHttpError(409, "User Already exist");
        }

        const newUser={
            name,
            email,
            password
        }

        const token=await createJwtToken(newUser)

        const createUser=await User.create(newUser)

        return successRespone(res,{
            statusCode:200,
            message:"User create sucessfullly",
            payload:{createUser,token}
        })


    } catch (error) {
        next(error)
    }
}


const LoginUser=async(req,res,next)=>{
    try {
        const { email, password} = req.body;
        
        const user = await User.findOne({"email":email});
    	
         const yes=bcrypt.compareSync(password,user.password)
        
        if(!yes){
            throw createHttpError(409, "Wrong Password,Please try again");
        }

        if (!user) {
          throw createHttpError(409, "Wrong Auth,Please try again ddd");
        }

        const newUser={
            email,
            password
        }

        

        const token=await createJwtToken(newUser)




        return successRespone(res,{
            statusCode:200,
            message:"User create sucessfullly",
            payload:{token,user}
        })


    } catch (error) {
        next(error)
    }
}

const getUser=async(req,res,next)=>{
    try {
        const user=await User.find({})
        return successRespone(res,{
            statusCode:200,
            payload:{
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

const deleteUser=async(req,res,next)=>{
    try {
        const userRes=await User.deleteMany();
        return successRespone(res,{
            statusCode:200,
            payload:{
                userRes
            }
        })
    } catch (error) {
        
    }
}

module.exports={RegisterUser,LoginUser,getUser,deleteUser}