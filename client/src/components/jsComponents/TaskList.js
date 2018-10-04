import React, { Component } from 'react';
import Task from './Task.js';
import '../cssComponents/TaskList.css'

class TaskList extends Component {
  render() {
    return (
      <div className={`TaskList ${this.props.additionalClassNames ? this.props.additionalClassNames : ''}`}>
        <ul>
          {this.props.tasks.map((task) => <Task onCompleteTask={this.props.onCompleteTask} onDeleteTask={this.props.onDeleteTask} key={task._id} task={task} />)}
        </ul>
      </div>
    );
  }
}
export default TaskList;