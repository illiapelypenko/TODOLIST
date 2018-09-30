const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express(); 
//const fs = require('fs');
//const data = fs.readFileSync('Tasks.json');
//JSON.parse(data);
let tasks = 
[
	{
		"id": 0,
		"task": "to make a website",
		"isComplited": false
	},
	{
		"id": 1,
		"task": "to do my homework",
		"isComplited": false
	},
	{
		"id": 2,
		"task": "to make a coffee",
		"isComplited": false
	},
	{
		"id": 3,
		"task": "to make a tea",
		"isComplited": true
	},
	{
		"id": 4,
		"task": "to read a book",
		"isComplited": false
	},
	{
		"id": 5,
		"task": "to do workout",
		"isComplited": true
	}
]

app.use(bodyParser.json());

app.post('/api/newTask', (req, res) => {
  tasks.push({
    id: tasks[tasks.length-1].id+1,
    task: req.body.task,
    isComplited: false
  });
  //writeToJSONFile();
});

app.get('/api/tasks', (req, res ) => {  
  res.json(tasks);  
}); 

app.listen(port, () => console.log(`Server started on port ${port}`)); 

// function writeToJSONFile() {
//   fs.writeFile('./Tasks.json', JSON.stringify(tasks, null, '\t'));
// }