import React, { useState } from "react";

export default function TodoForm(props) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setValue(value);
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your chores..."
        className="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
}
