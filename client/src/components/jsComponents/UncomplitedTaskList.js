import React, { Component } from 'react';
import Task from './Task.js';

class UncomplitedTaskList extends Component {
  render() {
    return (
      <div className="UncomplitedTaskList">
        <ul>
          {this.props.tasks.map((task) => <Task onCompliteTask={this.props.onCompliteTask} onDeleteTask={this.props.onDeleteTask} key={task.id} task={task} />)}
        </ul>
      </div>
    );
  }
}
export default UncomplitedTaskList;