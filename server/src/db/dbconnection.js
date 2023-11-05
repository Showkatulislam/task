const { default: mongoose } = require("mongoose")

const dbConnection=async()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(()=>{
            console.log("Database Connection");
        })
        .catch(err=>{
            console.log("Database connection is fail",err.message);
        })
   
    } catch (error) {
        console.log("Coundn't connect database ",error.toString());
    }
}

module.exports=dbConnection