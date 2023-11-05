const { Schema,model } = require("mongoose");
const bcrypt = require('bcryptjs')
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[32,"Name will be less then 32 charecter"],
        minLength:[5,"Name will be greater then 5 charecter"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        trim:true,
        unique:true,
        lowercase:true,
        validate:{
            validator:(v)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message:"Please enter a valid email"
        }
    },
    password:{
        type:String,
        required:[true,"Password is needed"],
        minLength:[5,"Name will be greater then 5 charecter"],
        set:(v)=>bcrypt.hashSync(v,bcrypt.genSaltSync(10))
    },
},{
    timestamps:true
})

const User=model("users",userSchema)

module.exports=User