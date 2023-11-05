const { default: mongoose } = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Work title field is required"],
    trim: true,
    unique:true
  },
  content: {
    type: String,
    required: [true, "Work content field is required"],
},
  status: {
    type: String,
    emun: ["pending", "completed"],
    default: "pending",
  },
  email: {
    type:String,
    required: true,
   
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
