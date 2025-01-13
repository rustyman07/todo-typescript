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
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Todo List
          </h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
