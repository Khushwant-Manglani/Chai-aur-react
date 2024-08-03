import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form action="" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Write text..."
        className="outline-none border border-[#333] rounded-l w-[600px] pl-5 h-[50px] text-[#ffff] bg-[hsl(240,16%,24%)] hover:bg-[hsl(240,16%,20%)]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="w-[70px] h-[50px] pt-[1px] border border-[#333] rounded-r bg-[hsl(256,69%,47%)] hover:bg-[hsl(256,69%,40%)] text-white"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
