import React, { Component } from 'react';
import Title from './Title.js';
import TaskList from './TaskList.js';
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
      ]
    };
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleCompleteTask(task) {
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks[task.id].isCompleted = true;
      return { tasks: newTasks};
    });
    this.renewIds();
  }
  handleDeleteTask(task) {
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
  handleAddTask(task){
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks.push({
        id: newTasks[newTasks.length-1].id + 1,
        task: task,
        isCompleted: false
      });
      return { tasks: newTasks};
    });
  }
  handleHideTasks() {
    console.log(document.querySelector(".CompletedList"));
    let list = document.querySelector(".CompletedList");
    if(list.style.display == 'none'){
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
  render() {
    console.log(this.state.tasks);
    return (
      <div className="ToDoList">
        <Title />
        <TaskList onCompleteTask={this.handleCompleteTask} onDeleteTask={this.handleDeleteTask} tasks={this.state.tasks.filter(task => task.isCompleted === false)}/>
        <Form onAddTask={this.handleAddTask}/>

        <button onClick={this.handleHideTasks}>Completed: </button>

        <TaskList additionalClassNames="CompletedList" onDeleteTask={this.handleDeleteTask} tasks={this.state.tasks.filter(task => task.isCompleted === true)}/>
      </div>
    );
  }
}
export default ToDoList;