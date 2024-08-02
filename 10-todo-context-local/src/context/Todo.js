import { createContext, useContext } from "react";

// create context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Play football",
      completed: false,
    },
  ],
  addTodo: (todoTitle) => {},
  updateTodo: (id, todoTitle) => {},
  deleteTodo: (id) => {},
  checkedTodo: (id) => {},
});

// context provider
export const TodoProvider = TodoContext.Provider;

// use todo hook
export const useTodo = () => {
  return useContext(TodoContext);
};
