import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn useState",
      isCompleted: true,
    },
    {
      text: "Make todo list",
      isCompleted: true,
    },
    {
      text: "Put it on github",
      isCompleted: true,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1 className="heading">Todo list</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
