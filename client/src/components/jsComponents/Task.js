import React, { Component } from 'react';
import '../cssComponents/Task.css'

class Task extends Component { //props: task onCompleteTask
  constructor(props) {
    super(props);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleUncompleteTask = this.handleUncompleteTask.bind(this);    
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }
  handleUncompleteTask() {//передаем task{} в корень
    this.props.onUncompleteTask(this.props.task);
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
          <div className='divText'>{this.props.task.task}</div>

          {this.props.onDeleteTask ? <button onClick={this.handleDeleteTask}>D</button> : null}
          {this.props.onCompleteTask ? <button onClick={this.handleCompleteTask}>C</button> : null}
          {this.props.onUncompleteTask ? <button onClick={this.handleUncompleteTask}>U</button> : null}
        </li>
        
    );
  }
}

export default Task;