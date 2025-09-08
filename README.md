
---

# ⚡ Backend (Node + Express + MongoDB)

```markdown
# 🎓 Rosterly Backend

This is the backend server for **Rosterly**, built with **Node.js + Express**.  
It handles student CRUD operations, integrates with **MongoDB**, and uploads images to **Cloudinary**.

---

## 🚀 Features
- Add new student with profile image (Cloudinary upload).
- Get all students.
- Update student details.
- Delete student record.
- Fetch available courses from mock API.

---

## 🛠️ Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Cloudinary** (image hosting)
- **Multer** (file handling)
- **CORS** enabled for frontend communication

---

## ⚡ API Endpoints

### 👨‍🎓 Students
- `POST /student/addStudent` → Add new student (multipart/form-data).
- `GET /student/getAll` → Get all students.
- `PUT /student/update/:id` → Update student by ID.
- `DELETE /student/delete/:id` → Delete student by ID.

### 📚 Courses
- `GET /getCourses` → Returns all courses (courseName only).

---

## 📂 Folder Structure
backend/
│── models/
│ └── student.model.js
│── server.js
│── .env
│── package.json


---

## ⚡ Setup
1. Clone repo and move to backend folder.
2. Install dependencies:
    npm install

3. Add a .env file

MONGODB_URL=your_mongodb_connection
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. Run the server
npm start
