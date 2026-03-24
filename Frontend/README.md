# To-Do List Full Stack Application

## Project Description

This project is a **Full Stack To-Do List Application** developed using **Node.js, Express.js, MongoDB, and React**.

The application allows users to:

* Create tasks
* View all tasks
* Update task status
* Delete tasks

The backend provides REST APIs while the React frontend consumes these APIs to display and manage tasks dynamically.

---

# Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* React
* JavaScript
* CSS

### Tools

* Git
* GitHub
* Postman
* Fetch

---

# Project Structure

```
Assignment-8
│
├── Backend
│   ├── config
│   │   └── DB.js
│   │
│   ├── Controller
│   │   └── Task-Controller.js
│   │
│   ├── Model
│   │   └── Task-Model.js
│   │
│   ├── Routes
│   │   └── Task-Routes.js
│   │
│   ├── Server.js
│   └── .env
│
├── Frontend
│   ├── hooks
│   │   └── useFetch.js
│   │
│   └── src
│       ├── App.jsx
│       ├── main.jsx
│
└── README.md
```

---

# Backend Setup

## 1 Clone Repository

```
git clone <your-github-link>
cd Assignment-8
```

---

## 2 Install Dependencies

```
cd Backend
npm install
```

---

## 3 Environment Variables

Create `.env` file in Backend folder.

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todo
```

---

## 4 Start Server

```
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

# API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | `/api/task`     | Get all tasks   |
| GET    | `/api/task/:id` | Get task by ID  |
| POST   | `/api/task`     | Create new task |
| PATCH  | `/api/task/:id` | Update task     |
| DELETE | `/api/task/:id` | Delete task     |
| SEARCH | `/api/task/search` | Search tasks |
---

# Frontend Setup

Navigate to frontend directory.

```
cd Frontend
npm install
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Testing APIs

All APIs were tested using **Postman**.

Example request:

POST `/api/task`

```
{
 "task": "Finish Assignment",
 "complete": false
}
```

---

# Features

* Create tasks
* Delete tasks
* Update tasks
* Mark tasks complete
* Dynamic UI update
* Custom React Hook (`useFetch`)
* RESTful API structure

---

# Challenges Faced

### 1 MongoDB Connection

Initially faced connection issues due to incorrect URI.

Solution:
Used environment variables and proper database configuration.

---

### 2 CORS Issues

Frontend could not communicate with backend.

Solution:
Configured CORS middleware in `Server.js`.

---

### 3 Dynamic Data Update

React UI was not updating after task deletion.

Solution:
Implemented reload mechanism using `useFetch` hook.

---

# Deployment

Backend can be deployed using:

* Render

Frontend can be deployed using:

* Netlify

---

# Author

**Prasenjit Paul**
BCA Student
Web Developer

---

# License

This project is developed for academic purposes.
