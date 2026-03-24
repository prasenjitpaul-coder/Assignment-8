import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    task: {
        type: String,
        required: true,
        minlength: 3,
        maxlength:22,
    },
    complete: {
        type: Boolean,
        default: false,
    },
}, { timestamps:true });

 const Task = mongoose.model("task",TaskSchema);
 export default Task;