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
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  componentDidMount() {
    this.updateTasks();
  }
  updateTasks() {
    fetch(`/api/tasks`).then(res => res.json()).then(tasks => this.setState({tasks}));
  }
  handleCompleteTask(task) {
    task.isCompleted = true;
    fetch(
      `/api/tasks/${task.id}`,
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
    fetch(`/api/tasks/${task.id}`,{
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
    if(list.style.display === 'none'){
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
  render() {
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