import { useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoInput text={text}></TodoInput>
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
