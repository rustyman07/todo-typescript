import React from "react";
import { useTodoContext } from "./context/TodoContext";

export const TodoList: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const handleToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return (
    <ul>
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
