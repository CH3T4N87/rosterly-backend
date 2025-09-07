import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    image : String,
    name : String,
    email : String,
    course : String,
});

const studentModel = mongoose.model("Student" , studentSchema);

export default studentModel;