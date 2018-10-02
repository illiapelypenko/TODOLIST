const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express(); 
const fs = require('fs');

app.use(bodyParser.json());

app.get('/api/tasks', (req, res ) => {  
  let data = fs.readFileSync('Tasks.json');
  let tasks = JSON.parse(data);
  res.json(tasks);  
}); 

app.post('/api/newTask', (req, res) => {
  let data = fs.readFileSync('Tasks.json');
  let tasks = JSON.parse(data);
  tasks.push({
    id: tasks[tasks.length-1].id+1,
    task: req.body.task,
    isComplited: false
  });
  fs.writeFileSync('./Tasks.json', JSON.stringify(tasks, null, '\t'));
});


app.listen(port, () => console.log(`Server started on port ${port}`));