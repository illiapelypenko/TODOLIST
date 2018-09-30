import React, { Component } from 'react';
import Title from './Title.js';
import UncomplitedTaskList from './UncomplitedTaskList.js';
import Form from './Form.js';
//2
class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
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
    };
    this.onCompliteTask = this.onCompliteTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
  }
  onCompliteTask(task) {
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks[task.id].isComplited = true;
      return { tasks: newTasks};
    });
    this.renewIds();
  }
  onDeleteTask(task) {
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks.splice(newTasks.indexOf(newTasks.find(todo => todo.id === task.id)), 1);
      return { tasks: newTasks};
    });
    this.renewIds();//обновляю айдишники
  }
  renewIds() {
    this.state.tasks.forEach(task => {
      task.id = this.state.tasks.indexOf(task);
    });
  }
  onAddTask(task){
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks.push({
        id: newTasks[newTasks.length-1].id + 1,
        task: task,
        isComplited: false
      });
      return { tasks: newTasks};
    });
  }
  render() {
    console.log(this.state.tasks);
    return (
      <div className="ToDoList">
        <Title />
        <UncomplitedTaskList onCompliteTask={this.onCompliteTask} onDeleteTask={this.onDeleteTask} tasks={this.state.tasks.filter(task => task.isComplited === false)}/>
        <Form onAddTask={this.onAddTask}/>
      </div>
    );
  }
}
export default ToDoList;