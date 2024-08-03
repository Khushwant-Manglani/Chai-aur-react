import { TodoForm, TodoItem } from "./components";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="h-screen flex flex-col pt-[100px] items-center gap-y-10">
      <h1>Todos</h1>

      <div className="flex flex-col gap-y-10">
        <TodoForm />

        <div className="flex flex-col gap-y-5">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
