import React, { Component } from 'react';
import '../cssComponents/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.state = {
      inputedTask: ''
    }
  }
  handleInputChange(e) {
    this.setState({inputedTask: e.target.value});
  }
  handleAddTask(e){
    this.props.onAddTask(this.state.inputedTask);
    this.setState({inputedTask: ''});
    e.preventDefault();
  }
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleAddTask}>
          <div className="inputField">
            <input spellCheck="false" type='text' ref='input' 
            onChange={this.handleInputChange} value={this.state.inputedTask} ></input>
          </div>
          <div className='inputButton'>
            <input type='submit' value='Add' />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;