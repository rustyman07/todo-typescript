import { useTodoContext } from "./context/TodoContext";
// type todoProps = {
//   text: string;
//   setText: (value: string) => void;
//   id: number | null;
//   isEdit: boolean;
//   setIsEdit: (isEdit: boolean) => void;
// };

export const TodoInput: React.FC = () => {
  const { state, addTodo, updateTodo, text, setText, id, isEdit, setIsEdit } =
    useTodoContext();

  const handleAddTodo = () => {
    // if (text.trim()) {
    //   addTodo;
    //   setText("");
    // }

    addTodo(text);
    setText("");
    console.log(state.todos);
    console.log();
    // setIsEdit(true);
  };

  const handleUpdate = (id: number | null, text: string) => {
    updateTodo(id, text);
    setText("");
    setIsEdit(false);
    console.log(isEdit);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        {isEdit ? "Edit Todo" : "Add New Todo"}
      </h2>

      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setText((event.target as HTMLInputElement).value ?? "")
          }
          placeholder="Enter a new todo"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />

        <button
          onClick={() => (isEdit ? handleUpdate(id!, text) : handleAddTodo())}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          {isEdit ? "Update Todo" : "Add Todo"}
        </button>
      </div>
    </div>
  );
};
