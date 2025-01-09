import { useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

// type todoProps = {
//   text : string
//   setText: (event : React.ChangeEvent<HTMLInputElement>)=> void;
// }
const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoInput text={text} setText={setText}></TodoInput>
        <TodoList  text={text}  setText={setText} />
      </div>
    </TodoProvider>
  );
};

export default App;
