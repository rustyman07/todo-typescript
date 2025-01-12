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
    <div>
      <input
        type="text"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setText(event.target.value)
        }
        placeholder="Enter a new todo"
      />
      <button
        onClick={() => (isEdit ? handleUpdate(id, text) : handleAddTodo())}
      >
        {isEdit ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};
