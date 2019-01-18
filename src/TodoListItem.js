import React from "react";

export const TodoListItem = props => {
  return (
    <>
      <li
        onClick={() => {
          props.toggleCompleted(props.todo.id);
        }}
        className={props.todo.completed ? "completed" : ""}
      >
        {props.todo.body}
      </li>

      {props.todo.completed ? (
        <button
          onClick={() => {
            props.deleteTodo(props.todo.id);
          }}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </>
  );
};

//onClick = {props.toggleCompleted(props.id)}
