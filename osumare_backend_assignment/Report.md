# 📝 REST API – Project Report

## 👨‍💻 Developer
Abhinav Shinde  
4th Year B.E. (IT), PES Modern College of Engineering

---

## 🎯 Objective
Build a basic RESTful API in Node.js using Express.

---

## 🛠️ Approach & Architecture

- **Framework:** Node.js with Express.js
- **Data Storage:** In-memory (`let tasks = []`)
- **Routing:** RESTful API design
- **Validation:** Manual checks for required fields (title, description)
- **Error Handling:** Central middleware for generic 500 errors
- **Unique IDs:** Generated using `uuid` package
- **Testing:** Postman
- **Extras:** Pagination, filtering & sorting (commented in code for optional usage)

---

## 🔍 Algorithm & Logic

- **Create Task (`POST`)**: Validate input, generate UUID, push to array.
- **Read Tasks (`GET`)**: Return full array or by ID.
- **Update (`PUT`)**: Find task by ID, update title and description.
- **Delete (`DELETE`)**: Remove task by ID using `filter`.

---

## ✅ Features Implemented

- ✅ CRUD operations
- ✅ Status code handling (200, 201, 400, 404)
- ✅ Input validation
- ✅ Error handling middleware
- ✅ Clean, modular code
- 🔲 Optional: Pagination & sorting logic (in comments)
- 🔲 Optional: Authentication (can be added if needed)

---

## 📦 How to Run Locally

```bash
npm install express uuid
node server.js
