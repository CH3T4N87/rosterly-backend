# 🎓 Rosterly Backend

This is the backend server for **Rosterly**, built with **Node.js + Express**.  
It handles student CRUD operations, integrates with **MongoDB**, and uploads images to **Cloudinary**.

---

## 🚀 Features
- Add new student with profile image (**Cloudinary upload**).
- Get all students.
- Update student details.
- Delete student record.
- Manage courses (add & fetch).

---

## 🛠️ Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Cloudinary** (image hosting)
- **Multer** (file handling)
- **CORS** (frontend communication)

---

## ⚡ API Endpoints

### 👨‍🎓 Students
| Method | Endpoint                   | Description                        |
|--------|----------------------------|------------------------------------|
| POST   | `/student/addStudent`      | Add new student (multipart/form-data) |
| GET    | `/student/getAll`          | Get all students                   |
| PUT    | `/student/update/:id`      | Update student by ID               |
| DELETE | `/student/delete/:id`      | Delete student by ID               |

### 📚 Courses
| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| POST   | `/addCourse`    | Add a new course            |
| GET    | `/getCourses`   | Returns all courses         |

---

## 📂 Setup & Project Structure

```yaml
backend/
│── models/
│   └── student.model.js        # Mongoose schema for student
│   └── student.model.js        # Mongoose schema for course
│── server.js                   # Express server
│── package.json                # Dependencies & scripts
│── .env                        # Environment variables

# Environment Variables (.env)
MONGODB_URL: your_mongodb_connection
CLOUDINARY_CLOUD_NAME: your_cloud_name
CLOUDINARY_API_KEY: your_api_key
CLOUDINARY_API_SECRET: your_api_secret

# Install dependencies
npm install

# Run the server
npm start
