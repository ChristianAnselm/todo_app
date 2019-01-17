import React from 'react';

export const TodoListItem = (props) => {
  return(
    <li>
      {props.todo.body}
    </li>
  )
}
