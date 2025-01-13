import React from "react";
import { useTodoContext } from "./context/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // Import the specific icons

export const TodoList: React.FC = () => {
  const { state, deleteTodo, setText, setID, setIsEdit, text } =
    useTodoContext();

  const handleRemoveTodo = (id: number | null) => {
    deleteTodo(id);
    setIsEdit(false);
  };

  const handleEditTodo = (id: number | null, text: string, tx: string) => {
    setText(tx);
    setID(id);
    setIsEdit(true);
  };

  return (
    <ul className="space-y-4">
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-4 border rounded-lg ${
            todo.completed ? "bg-green-100 line-through" : "bg-gray-50"
          }`}
        >
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? "text-green-500" : "text-gray-700"
            }`}
            onClick={() => {
              // handle toggle todo completed state
              // handleToggleTodo(todo.id);
            }}
          >
            {todo.text}
          </span>

          <div className="space-x-4 flex items-center">
            {/* Delete Icon */}
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faTrash} className="h-6 w-6" />
            </button>

            {/* Edit Icon */}
            <button
              onClick={() => handleEditTodo(todo.id, text, todo.text)}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faEdit} className="h-6 w-6" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
