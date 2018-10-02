import React, { Component } from 'react';
import Title from './Title.js';
import TaskList from './TaskList.js';
import Form from './Form.js';
//2
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
    console.log('did mount');
    fetch('/api/tasks').then(res => res.json()).then(tasks => this.setState({tasks}));
  }
  handleCompleteTask(task) {
    //put
    this.setState((state) => {
      let newTasks = state.tasks;
      newTasks[task.id].isCompleted = true;
      return { tasks: newTasks};
    });
    this.renewIds();
  }
  handleDeleteTask(task) {
    //delete
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
    //push
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
    let list = document.querySelector(".CompletedList");
    if(list.style.display === 'none'){
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
  render() {
    // fetch(
    //   '/api/updateTasks',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({taskss: this.state.tasks})
    //   }
    // );//обновить данные на сервере
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