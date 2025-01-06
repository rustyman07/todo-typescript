import React, { useState } from "react";
import { useTodoContext } from "./context/TodoContext";

export const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodoContext();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: { text } });
      setText("");
    }
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
