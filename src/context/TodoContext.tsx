import React, { createContext, useContext, useReducer, useState } from "react";
import { TodoState } from "../type/type.tsx";
import { todoReducer } from "../reducer/todoReducer";

// Initial state of the todo list
const initialState: TodoState = {
  todos: [],
};

// type todoProps = {
//   text: string;
//   setText: (value: string) => void;
//   id: number | null;
//   isEdit: boolean;
//   setIsEdit: (isEdit: boolean) => void;
// };

type TodoContextState = {
  state: TodoState;

  addTodo: (text: string) => void;
  deleteTodo: (id: number | null) => void;
  updateTodo: (id: number | null, text: string) => void;
  text: string;
  setText: (value: string) => void;
  id: number | null;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  setID: (id: number | null) => void;
};

const todoContextState: TodoContextState = {
  state: initialState,
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  text: "",
  setText: () => {},
  id: null,
  isEdit: false,
  setIsEdit: () => {},
  setID: () => {},
};

// Create the TodoContext using createContext
const TodoContext = createContext<TodoContextState>(todoContextState);

// TodoProvider to wrap the app and provide context values
export const TodoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState<string>("");
  const [id, setID] = useState<number | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: { text } });
    console.log("test");
  };

  const deleteTodo = (id: number | null) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  const updateTodo = (id: number | null, text: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };

  const value = {
    state,
    addTodo,
    deleteTodo,
    updateTodo,
    text,
    setText,
    id,
    setID,
    isEdit,
    setIsEdit,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Custom hook to consume the context
export const useTodoContext = () => useContext(TodoContext);
