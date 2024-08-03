import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodoHandler = (e) => {
    console.log(todo.id);
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-[#333] rounded-l w-[600px] h-[50px] text-[#ffff] bg-[hsl(240,16%,24%)] hover:bg-[hsl(240,16%,20%)]">
        <div className="pl-5">{todo.text}</div>
      </div>
      <button
        className="w-[70px] h-[50px] pt-[1px] border border-[#333] rounded-r text-[red] text-2xl bg-[hsl(256,69%,47%)] hover:bg-[hsl(256,69%,40%)]"
        onClick={removeTodoHandler}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
