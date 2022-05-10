import { API } from "aws-amplify";
import React, { useState } from "react";
import { createTodo, deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import { ChildrenProps, Todo } from "../types/types";

export const TodoContext = React.createContext<any>(null);

const TodoProvider = ({ children }: ChildrenProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    try {
      const apiData = await API.graphql<any>({ query: listTodos });
      setTodos(apiData.data.listTodos.items);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onNewTodo = async (todo: Todo): Promise<void> => {
    try {
      await API.graphql<any>({
        query: createTodo,
        variables: { input: todo },
      });

      await getTodos();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onDeleteTodo = async ({ id }: { id: string }) => {
    try {
      await API.graphql({ query: deleteTodo, variables: { input: { id } } });
      getTodos();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const getTodo = async (id: string) => {};

  const onUpdateTodo = (id: number, newText: string): void => {
    todos.filter((todo: Todo) => {
      if (todo.id === id) {
        todo.name = newText;
      }
      setTodos([...todos]);
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, getTodos, onDeleteTodo, onNewTodo, onUpdateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
