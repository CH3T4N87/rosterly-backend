import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

//model
import studentModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";

//configs
dotenv.config();
const app = express();
app.use(express.urlencoded());
app.use(express.json());



app.use(cors());


//  cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// local storage
const upload = multer({ dest: "uploads/" });


const MONGODB_URL = process.env.MONGODB_URL;

const dbConnection = async () => {
    await mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log("Connected to DB !!");
    })
    .catch(()=>{
        console.log("Failed to Connect to DB");
    })
}
dbConnection();

//add Course
app.post("/addCourse", async (req,res)=>{
  try{
    const { courseName } = req.body;
  let newCourse = await new courseModel({
    courseName : courseName,
  })
  await newCourse.save();
  res.status(200).send("Course Successfully Added !!");
  }catch(e){
    res.status(400).send(e);
  }
  // res.send("hiii");
})

//get courses
app.get("/getCourses", async (req,res) =>{
  try{
    const allCourses = await courseModel.find({});
    res.status(200).send(allCourses)
  }catch{
    res.status(400).send("Failed to Fetch !!");
  }
})



//CREATE
app.post("/student/addStudent", upload.single("image"), async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "students", // optional folder
    });

    // remove temp file
    fs.unlinkSync(req.file.path);

    // save student with image url
    const newStudent = new studentModel({
      image: result.secure_url, // cloudinary url
      name,
      email,
      course,
    });

    await newStudent.save();
    res.status(200).send("Student registered successfully!");
  } catch (error) {
    console.error(error);
    res.status(400).send("Failed !!");
  }
});

//READ
app.get("/student/getAll", async (req,res)=>{
    const students = await studentModel.find({});
    res.send(students);
});

//Update
app.put("/student/update/:id", upload.single("pic"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, course } = req.body;

    let updateData = { name, email, course };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "students",
      });
      fs.unlinkSync(req.file.path);
      updateData.image = result.secure_url;
    }

    const updatedStudent = await studentModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.json(updatedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send("Update failed!");
  }
});

//Delete
app.delete("/student/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await studentModel.findByIdAndDelete(id);
    res.status(200).send("Student deleted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Delete failed!");
  }
});


app.get("/",(req,res)=>{
    res.send("Server chalu h bhai !!");
});

app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is listening to 3000");
    
});