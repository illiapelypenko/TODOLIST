const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express(); 
const fs = require('fs');
app.use(bodyParser.json());

app.get('/api/tasks', (req, res ) => {    
  fs.readFile('./Tasks.json', (err, data) => {
    let tasks = JSON.parse(data);
    res.json(tasks); 
  });
}); 
app.post('/api/tasks/', (req, res) => {
  fs.readFile('./Tasks.json', (err, data) => {
    let tasks = JSON.parse(data);
    tasks.push({
      id: tasks.length,
      task: req.body.task,
      isCompleted: false
    });
    fs.writeFile('./Tasks.json', JSON.stringify(tasks, null, '\t'), (err, data) => {
      res.send();
    });
  });
});
app.put('/api/tasks/:id', (req, res) => {
  fs.readFile('./Tasks.json', (err, data)=>{
    let tasks = JSON.parse(data);
    tasks[tasks.indexOf(tasks.find(task => task.id == req.params.id))] = req.body;
    fs.writeFile('./Tasks.json', JSON.stringify(tasks, null, '\t'), (err)=>{res.send()});
  });
});
app.delete('/api/tasks/:id', (req, res) => {
  fs.readFile('./Tasks.json', (err, data) => {
    let tasks = JSON.parse(data);
    tasks.splice(tasks.indexOf(tasks.find(task => task.id == req.params.id)), 1);
    tasks.forEach(task => {
      task.id = tasks.indexOf(task);
    });
    fs.writeFile('./Tasks.json', JSON.stringify(tasks, null, '\t'), ()=>{res.send()});
  });
});
app.listen(port, () => console.log(`Server started on port ${port}`)); 