import { Divider, Stack, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Todo } from "../../types/types";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
type TodoListProps = {
  todos: Todo[];
  handleDelete: (id: string | number) => Promise<void>;
};

export default function TodoList({ todos, handleDelete }: TodoListProps) {
  return (
    <React.Fragment>
      <Stack>
        {todos.map((todo: Todo, index: number) => {
          return (
            <React.Fragment key={index}>
              <Divider />
              <Typography variant="h5">
                Todo : {todo.name}{" "}
                <IconButton
                  color="error"
                  component="span"
                  onClick={() => handleDelete(todo.id)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </Typography>

              <Box sx={{ m: 2 }} />
            </React.Fragment>
          );
        })}
      </Stack>
    </React.Fragment>
  );
}
