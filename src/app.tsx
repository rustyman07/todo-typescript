import React from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
