import React, { useState } from "react";
import { useTodoContext } from "./context/TodoContext";

export const TodoInput: React.FC = () => {
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    // if (text.trim()) {
    //   addTodo;
    //   setText("");
    // }
    addTodo(text);
    console.log("test");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target?.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
