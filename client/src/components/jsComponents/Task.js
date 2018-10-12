import React, { Component } from 'react';
import '../cssComponents/Task.css'

class Task extends Component { //props: task onCompleteTask
  constructor(props) {
    super(props);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleUncompleteTask = this.handleUncompleteTask.bind(this);    
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditTextDiv = this.handleEditTextDiv.bind(this);
    this.handleEditTextInput = this.handleEditTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleEditTextDiv(e) {    
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'inline-flex';
    e.target.nextSibling.children[0].style.display = 'inline-flex';
    e.target.nextSibling.children[0].setAttribute('value', e.target.innerText);
    console.log(e.target.nextSibling);
    console.log(e.target.innerText);
  }
  handleEditTextInput(e) {    
    e.target.style.backgroundColor = 'red';
  }
  handleSubmit(e){
    e.preventDefault();
    e.target.style.display = 'none';
    e.target.previousSibling.style.display = 'inline-flex';
    //todolist(fetch) -> task(on/handle)
  }
  render() {
    return (
        <li className="Task">
          <div className='divText' /*onClick={this.handleEditTextDiv}*/>{this.props.task.task}</div>

          <form onSubmit={this.handleSubmit} className='divForm'>
            <input className='divInput' type='text' value=''></input>
          </form>
          {this.props.onDeleteTask ? <button onClick={this.handleDeleteTask}>🗑️</button> : null}
          {this.props.onCompleteTask ? <button onClick={this.handleCompleteTask}>✔️</button> : null}
          {this.props.onUncompleteTask ? <button onClick={this.handleUncompleteTask}>u</button> : null}
        </li>
        
    );
  }
}

export default Task;