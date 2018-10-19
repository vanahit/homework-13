import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
