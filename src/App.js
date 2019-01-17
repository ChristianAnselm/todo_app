import React, { Component } from 'react';
import './App.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      todos: []
    }
  }

  handleChange = (event) => {
    this.setState({textInput: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo ={
      id: this.generateId(),
      body: this.state.textInput,
      completed: false
    }

    this.setState({
       todos:[...this.state.todos, newTodo],
       textInput: ""
    })
  }

generateId = () => {
    return Math.random()
      .toString(34)
      .slice(2);
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          handleChange={this.handleChange}
         textInput={this.state.textInput}
         handleSubmit={this.handleSubmit}
          />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
