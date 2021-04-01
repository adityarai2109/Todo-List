import React from "react";

export default function Todo(props) {
  return (
    <div
      className="todo"
      style={{
        textDecoration: props.todo.isCompleted
          ? "line-through 2px red"
          : "none",
      }}
    >
      {props.todo.text}
      <div>
        <button onClick={() => props.completeTodo(props.index)}>
          {props.todo.isCompleted ? "Undo" : "Completed"}
        </button>
        <button onClick={() => props.deleteTodo(props.index)}>Delete</button>
      </div>
    </div>
  );
}
