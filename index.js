const express = require("express");
const taskRouter = require("./routes/tasks");

const app = express();

// In-memory storage with 5 tasks
const tasks = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Practice Express routing",
    completed: false,
    priority: "medium",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Build REST API project",
    completed: false,
    priority: "high",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Study for LAB test",
    completed: true,
    priority: "low",
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Read JavaScript documentation",
    completed: false,
    priority: "medium",
    createdAt: new Date(),
  },
];

app.locals.tasks = tasks;

// Middleware
app.use(express.json());

// Mount router
app.use("/tasks", taskRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
