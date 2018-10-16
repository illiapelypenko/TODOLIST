const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express(); 
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017';
const dbName = 'todolist';
const client = new MongoClient(url);
let db;
let collection;
app.use(bodyParser.json());
client.connect(() => {
  db = client.db(dbName);
  collection = db.collection('tasksTest');
  app.listen(port, () => console.log(`Server started on port ${port}`)); 
});
app.get('/api/tasks', (req, res ) => { 
  collection.find({}).toArray((err, tasks) => {
    res.json(tasks);
  });
}); 
app.delete('/api/tasks/:id', (req, res) => {
  collection.deleteOne({_id : new ObjectId(req.params.id)}, (err, result)=>{
    res.send();
  });
});
app.post('/api/tasks/', (req, res) => {
    collection.insert({
      task: req.body.task,
      isCompleted: false
    }, ()=>{
      res.send();
    });
});
app.put('/api/tasks/:id', (req, res) => {
  collection.update({_id : new ObjectId(req.params.id)}, {$set: { isCompleted: !req.body.isCompleted }},(err, result)=>{
    console.log(req.body.isCompleted);
    res.send();
  });
});