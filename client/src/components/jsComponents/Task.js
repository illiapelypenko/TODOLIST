import React, { Component } from 'react';


class Task extends Component { //props: task onCompliteTask
  constructor(props) {
    super(props);
    this.onCompliteTask = this.onCompliteTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }
  onCompliteTask() {//передаем task{} в корень
    this.props.onCompliteTask(this.props.task);
  }
  onDeleteTask() {//передаем task{} в корень
    this.props.onDeleteTask(this.props.task);
  }
  render() {
    return (
        <li className="Task">
          {this.props.task.task}
          <button onClick={this.onCompliteTask}>complite</button>
          <button onClick={this.onDeleteTask}>delete</button>
        </li>
        
    );
  }
}

export default Task;