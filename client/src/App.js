import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/jsComponents/ToDoList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;

/*
ToDoList {
  Title  
  UncomplitedTaskList {
    
  }
  Form
}
*/