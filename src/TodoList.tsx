import React from "react";
import { useTodoContext } from "./context/TodoContext";

export const TodoList: React.FC = ({ text }) => {
  const { state, deleteTodo, updateTodo } = useTodoContext();

  const handleToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleEditTodo = (id: number, text: string) => {
    updateTodo(id, text);
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
          <button onClick={() => handleEditTodo(todo.id, text)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};
