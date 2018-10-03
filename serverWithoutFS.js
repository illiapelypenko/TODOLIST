const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express(); 
const fs = require('fs');
app.use(bodyParser.json());
let tasks = [
	{
		"id": 0,
		"task": "to make a webapp",
		"isCompleted": false
	},
	{
		"id": 1,
		"task": "to do my homework",
		"isCompleted": false
	},
	{
		"id": 2,
		"task": "to make a coffee",
		"isCompleted": false
	},
	{
		"id": 3,
		"task": "to make a tea",
		"isCompleted": true
	},
	{
		"id": 4,
		"task": "to read a book",
		"isCompleted": false
	},
	{
		"id": 5,
		"task": "to do workout",
		"isCompleted": true
	}
];

app.get('/api/tasks', (req, res ) => {    
  res.json(tasks);  
}); 

app.get('/api/tasks/:id', (req, res) => {
  res.json(tasks.find(task => task.id == req.params.id));
});

app.post('/api/tasks/', (req, res) => {
  tasks.push({
    id: tasks.length,
    task: req.body.task,
    isCompleted: false
  });
  res.send();
});

app.put('/api/tasks/:id', (req, res) => {
  tasks[tasks.indexOf(tasks.find(task => task.id == req.params.id))] = req.body;
  res.send();
});

app.delete('/api/tasks/:id', (req, res) => {
  tasks.splice(tasks.indexOf(tasks.find(task => task.id == req.params.id)), 1);
  tasks.forEach(task => {
    task.id = tasks.indexOf(task);
  });
  res.send();
});

app.listen(port, () => console.log(`Server started on port ${port}`));