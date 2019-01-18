import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = props => {
  let todos = props.todos.map(todoItem => {
    return (
      <TodoListItem
        key={todoItem.id}
        todo={todoItem}
        toggleCompleted={props.toggleCompleted}
        deleteTodo={props.deleteTodo}
      />
    );
  });

  return (
    <>
      <ul>{todos}</ul>
    </>
  );
};
