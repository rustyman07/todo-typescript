import React, { InputHTMLAttributes, useState } from "react";
import { useTodoContext } from "./context/TodoContext";
type todoProps = {
  text : string
  setText: (value:string)=> void;
}

export const TodoInput: React.FC<todoProps>= ({text,setText}) => {

  const { addTodo ,updateTodo} = useTodoContext();
  const [isEdit,setIsEdit] = useState<boolean>(false)

  const handleAddTodo = () => {
    // if (text.trim()) {
    //   addTodo;
    //   setText("");
    // }
    addTodo(text);
    setText('');
    console.log()
  };
  
  const handleUpdate = (id:number ,text: string)=>{
    updateTodo(id, text);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event : React.ChangeEvent<HTMLInputElement>) => setText(event.target?.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={()=>isEdit? handleUpdate() : handleAddTodo()}>{isEdit? "Update Todo":"Add Todo"}</button>
    </div>
  );
};
