const express = require("express");
const taskRouter = require("./routes/tasks");

const app = express();

// In-memory storage 
const tasks = [{ id: 1, title: "Sample Task", completed: false }];

// Share array with routes
app.locals.tasks = tasks;

// Middleware
app.use(express.json()); // Allows JSON bodies

// Mount router
app.use("/tasks", taskRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
