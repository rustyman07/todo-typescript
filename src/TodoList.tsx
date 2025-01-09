import React from "react";
import { useTodoContext } from "./context/TodoContext";

type todoProps = {
  text : string
  setText: (text:string) => void;
}
export const TodoList: React.FC<todoProps> = ({ text ,setText}) => {
  const { state, deleteTodo, updateTodo } = useTodoContext();

  const handleToggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleEditTodo = (id: number, text: string,tx:string) => {
    setText(tx)
    
  };

  const handleUpdate = (id:number ,text: string)=>{
    updateTodo(id, text);
  
  }

  return (
    <ul>
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          <button onClick={() => handleEditTodo(todo.id, text,todo.text)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};
