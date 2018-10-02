import React, { Component } from 'react';
import '../cssComponents/Task.css'

class Task extends Component { //props: task onCompleteTask
  constructor(props) {
    super(props);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }
  handleCompleteTask() {//передаем task{} в корень
    this.props.onCompleteTask(this.props.task);
  }
  handleDeleteTask() {//передаем task{} в корень
    this.props.onDeleteTask(this.props.task);
  }
  render() {
    return (
        <li className="Task">
          <div className='TaskText'>{this.props.task.task}</div>
          {this.props.onCompleteTask ? <button onClick={this.handleCompleteTask}>complete</button> : null}
          {this.props.onDeleteTask ? <button onClick={this.handleDeleteTask}>delete</button> : null}
        </li>
        
    );
  }
}

export default Task;