import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Count from "../../components/Count/Count";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import TodoList from "../../components/TodoList.tsx/TodoList";
import { ErrorContext } from "../../context/ErrorContext";
import { IncrementContext } from "../../context/IncrementContext";
import { TodoContext } from "../../context/TodoContext";

export default function Home() {
  const { count, onIncrement, onDecrement } = useContext(IncrementContext);
  const { todos, getTodos, onDeleteTodo } = useContext(TodoContext);
  const { onNewError } = useContext(ErrorContext);

  const [todosAws, setAwsTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      if (!todos.length) {
        await getTodos();
      }
    } catch (error: any) {
      onNewError(error.errors[0].message);
    }
  }

  const handleDelete = async (id: string | number) => {
    try {
      await onDeleteTodo({ id });
    } catch (error: any) {
      onNewError(error.errors[0].message);
    }
  };

  const handleIncrement = () => {
    onIncrement();
  };
  const handleDecrement = () => {
    onDecrement();
  };

  return (
    <React.Fragment>
      <Stack spacing={2} direction="row">
        <SimpleButton
          buttonText="create error"
          variant="outlined"
          onClickCallback={fetchTodos}
        />
        <SimpleButton
          buttonText="Increment"
          variant="outlined"
          onClickCallback={handleIncrement}
        />
        <SimpleButton
          buttonText="Decrement"
          variant="contained"
          onClickCallback={handleDecrement}
        />
      </Stack>
      <Count count={count} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </React.Fragment>
  );
}
