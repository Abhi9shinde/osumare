# REST API Documentation
## Base URL:
http://localhost:3000
## 📌 Endpoints

#### GET `/tasks`
- **Description:** Retrieve all tasks.
- **Response:**
```json
[
  {
    "id": "{random numbers}",
    "title": "Sample Task",
    "description": "This is a task"
  }
]
```

#### POST `/tasks`
- **Description:** Create a new task.
- **Body:**
```json
  {
  "title": "New Task",
  "description": "Task details"
}
```

#### PUT `/tasks/:id`
- **Description:** Update a task by ID.
- **Body:**
```json
  {
  "title": "New Task",
  "description": "Task details"
}
```

#### PUT `/tasks/:id`
- **Description:** Delete a task by ID.
- **Response:**
```json
  {
  "message": "Task deleted"
}
```

### Test Instruction
```
node server.js

```


