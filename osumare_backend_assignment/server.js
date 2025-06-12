const express = require("express");
const { v4: uuid } = require("uuid"); //for generating unique IDs to identify each task uniquely

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = []; //array to hold tasks(in memory storage)

//get all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// //get tasks optional (pagination,sorting,filter)
// app.get('/tasks', (req, res) => {
//   let results = [...tasks];

//   const { page = 1, limit = 5, sort, title } = req.query; //setting default values for page and limit

//   if (title) {
//     results = results.filter(task =>
//       task.title.toLowerCase().includes(title.toLowerCase())
//     );
//   }

//   if (sort === 'asc') results.sort((a, b) => a.title.localeCompare(b.title));
//   if (sort === 'desc') results.sort((a, b) => b.title.localeCompare(a.title));

//   const start = (page - 1) * limit;
//   const end = start + parseInt(limit);

//   res.status(200).json({
//     total: results.length,
//     page: parseInt(page),
//     tasks: results.slice(start, end)
//   });
// });

//get a specific task by id
app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

//create new task using POST
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and Description are required" });
  }
  const newTask = { id: uuid(), title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

//update existing task by ID
app.put("/tasks/:id", (req, res) => {
  const { title, description } = req.body;
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and Description are required" });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], title, description };
  res.status(200).json(tasks[taskIndex]);
});

//delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }
  tasks = tasks.filter((task) => task.id !== taskId);
  res.status(200).json({ message: "Task deleted" });
});
//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Somethin went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
