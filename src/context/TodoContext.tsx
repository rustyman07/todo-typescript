import React, { createContext, useContext, useReducer } from "react";
import { TodoState, TodoAction } from "../type/type.tsx";
import { todoReducer } from "../reducer/todoReducer";

// Initial state of the todo list
const initialState: TodoState = {
  todos: [],
};

// Create the TodoContext using createContext
const TodoContext = createContext<{
  state: TodoState;
  //   dispatch: React.Dispatch<TodoAction>;
  // }>({
  //   state: initialState,
  //   dispatch: () => {},
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}>({
  state: initialState,
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

// TodoProvider to wrap the app and provide context values
export const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: { text } });
    console.log("test");
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  const updateTodo = (id: number, text: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };
  return (
    <TodoContext.Provider value={{ state, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to consume the context
export const useTodoContext = () => useContext(TodoContext);
