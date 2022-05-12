import { API, Storage } from "aws-amplify";
import React, { useState } from "react";
import { createTodo, deleteTodo } from "../graphql/mutations";
import { getTodo, listTodos } from "../graphql/queries";
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

  const onGetTodo = async (id: string) => {
    try {
      const todo: any | undefined = await API.graphql({
        query: getTodo,
        variables: { id },
      });
      return todo?.data.getTodo;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onUpdateTodo = async (id: number, data: File): Promise<void> => {
    try {
      await Storage.put(data.name, data);
    } catch (error) {}
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        getTodos,
        onDeleteTodo,
        onGetTodo,
        onNewTodo,
        onUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
