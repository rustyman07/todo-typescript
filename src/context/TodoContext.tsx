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
  dispatch: React.Dispatch<TodoAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

// TodoProvider to wrap the app and provide context values
export const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to consume the context
export const useTodoContext = () => useContext(TodoContext);
