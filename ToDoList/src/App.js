import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';

class App extends Component {
  constructor(props){
    super(props);
  }

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
