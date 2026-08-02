const express = require('express');
const app = express();

let tasks = [
  { id: 1, title: 'Learn Express', completed: false },
  { id: 2, title: 'Build a REST API', completed: true }
];
let nextId = 3;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

app.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    const contentType = req.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return res.status(400).json({ error: 'Content-Type must be application/json' });
    }
  }
  next();
});

function validateTaskId(req, res, next) {
  const taskId = Number(req.params.id);
  if (!Number.isInteger(taskId) || taskId <= 0) {
    return res.status(400).json({ error: 'Task ID must be a positive integer' });
  }
  req.taskId = taskId;
  next();
}

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Task title is required' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', validateTaskId, (req, res) => {
  const task = tasks.find((item) => item.id === req.taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, completed } = req.body;

  if (typeof title === 'string' && title.trim() !== '') {
    task.title = title.trim();
  }

  if (typeof completed === 'boolean') {
    task.completed = completed;
  }

  res.status(200).json(task);
});

app.delete('/tasks/:id', validateTaskId, (req, res) => {
  const taskIndex = tasks.findIndex((item) => item.id === req.taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];
  res.status(200).json(deletedTask);
});

app.get('/crash', (req, res) => {
  throw new Error('Simulated crash');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  console.error(err.message);
  res.status(500).json({ error: 'Something went wrong' });
});

if (require.main === module) {
  app.listen(5000, () => console.log('Server is running on port 5000'));
}

module.exports = app;