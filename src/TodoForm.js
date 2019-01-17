import React from 'react';
export const TodoForm = (props) => {
  return(
    <>
    <form onSubmit={props.handleSubmit}>
      <input type="text"
        onChange={props.handleChange}
       value={props.textInput}
       placeholder="Enter Your Todo" />
       <button type="submit">Add Todo</button>
    </form>
    </>
  )
}
