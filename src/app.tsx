import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";

// type todoProps = {
//   text : string
//   setText: (event : React.ChangeEvent<HTMLInputElement>)=> void;
// }
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
