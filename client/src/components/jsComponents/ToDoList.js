import React, { Component } from 'react';
import Title from './Title.js';
import TaskList from './TaskList.js';
import Form from './Form.js';
import '../cssComponents/ToDoList.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleUncompleteTask = this.handleUncompleteTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  componentDidMount() {
    this.updateTasks();
  }
  updateTasks() {
    fetch(`/api/tasks`).then(res => res.json()).then(tasks => {
      this.setState({tasks});
    });
  }
  handleCompleteTask(task) {
    fetch(
      `/api/tasks/${task._id}`,
      {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    ).then(()=>{
      this.updateTasks();
    });
  }
  handleUncompleteTask(task) {
    fetch(
      `/api/tasks/${task._id}`,
      {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    ).then(()=>{
      this.updateTasks();
    });
  }
  handleDeleteTask(task) {
    fetch(`/api/tasks/${task._id}`,{
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(()=>{
      this.updateTasks();
    });
  }
  handleAddTask(task){
    fetch('/api/tasks',
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task: task})//text
    }).then(()=>{
      this.updateTasks();
    });    
  }
  handleHideTasks() {
    let list = document.querySelector(".CompletedList");
    let button = document.querySelector("#completeButton");
    if(list.style.display === 'block'){
      list.style.display = 'none';
      button.innerText = 'Completed';
      button.style.borderBottom = 'none';
    } else {
      list.style.display = 'block';
      button.innerText = 'Hide';
      button.style.borderBottom = '2px solid #555';  
    }
  }
  render() {
    return (
      <div className="ToDoList">
        <Title />
        <Form onAddTask={this.handleAddTask}/>
        <TaskList onCompleteTask={this.handleCompleteTask} onDeleteTask={this.handleDeleteTask} tasks={this.state.tasks.filter(task => task.isCompleted === false).reverse()}/>

        <button id='completeButton' onClick={this.handleHideTasks}>Completed</button>

        <TaskList additionalClassNames="CompletedList" onDeleteTask={this.handleDeleteTask} onUncompleteTask={this.handleUncompleteTask} tasks={this.state.tasks.filter(task => task.isCompleted === true).reverse()}/>
      </div>
    );
  }
}
export default ToDoList;