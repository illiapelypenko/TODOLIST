import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onAddTask = this.onAddTask.bind(this);
    this.state = {
      inputedTask: ''
    }
  }
  onInputChange(e) {
    this.setState({inputedTask: e.target.value});
  }
  onAddTask(e){
    this.props.onAddTask(this.state.inputedTask);
    this.setState({inputedTask: ''});
    e.preventDefault();
  }
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.onAddTask}>
          <div>
            <input type='text' ref='input' 
            onChange={this.onInputChange} value={this.state.inputedTask} ></input>
          </div>
          <div>
            <input type='submit' value='Add' />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;