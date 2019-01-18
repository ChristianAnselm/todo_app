import React, { Component } from "react";
import "./App.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      todos: []
    };
  }

  // FORM FUNCTIONS

  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      id: this.generateId(),
      body: this.state.textInput,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      textInput: ""
    });
  };

  // TODO FUNCTIONS

  toggleCompleted = id => {
    let oldState = [...this.state.todos];
    let newState = oldState.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: newState
    });
  };

  deleteTodo = id => {
    let oldState = [...this.state.todos];
    let newState = oldState.filter(todo => {
      if (todo.id === id) {
        return false;
      }

      return true;
    });

    this.setState({
      todos: newState
    });
  };

  // UTILITY/HELPER FUNCTIONS

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
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
