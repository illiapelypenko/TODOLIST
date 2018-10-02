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

app.post('/api/updateTasks', (req, res) => {
  //fs.writeFileSync('./Tasks.json', JSON.stringify(req.body.tasks, null, '\t'));
  console.log(req.body);
});


app.listen(port, () => console.log(`Server started on port ${port}`));