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
  const [id,setID] = useState<number | null>(null)
  const [isEdit,setIsEdit] = useState<boolean>(false)
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoInput text={text} setText={setText} id={id} isEdit={isEdit}></TodoInput>
        <TodoList  text={text}  setText={setText} id={id} isEdit={isEdit} setIsEdit={setIsEdit} setID={setID}/>
      </div>
    </TodoProvider>
  );
};

export default App;
