import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
   courseName : String
});

const courseModel = mongoose.model("course" , courseSchema);

export default courseModel;